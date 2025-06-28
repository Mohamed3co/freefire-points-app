// /api/requestWithdrawal.js

import express from 'express';
import bodyParser from 'body-parser';
import { deductUserPoints } from './updatePoints.js';
import { db } from './firebaseConfig.js';
import fetch from 'node-fetch';

const router = express.Router();
router.use(bodyParser.json());

// معلومات بوت التليغرام
const TELEGRAM_BOT_TOKEN = '8096326997:AAE_UuRKi3gnCdOfXKu76X4D4cPUuXSpPbo';
const TELEGRAM_CHAT_ID = '6285856969'; // معرّف حسابك في تيليجرام

router.post('/', async (req, res) => {
  const { userId, freefireId } = req.body;

    if (!userId || !freefireId) {
        return res.status(400).json({ success: false, message: "البيانات غير مكتملة." });
          }

            try {
                // محاولة خصم النقاط
                    const result = await deductUserPoints(userId, 1500);
                        if (!result.success) {
                              return res.status(400).json({ success: false, message: result.error });
                                  }

                                      // إرسال رسالة إلى تيليجرام
                                          const message = `
                                          📥 طلب شحن جديد

                                          👤 المستخدم: ${userId}
                                          🆔 ID فري فاير: ${freefireId}
                                          💰 تم خصم 1500 نقطة.
                                              `;

                                                  const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
                                                      await fetch(telegramURL, {
                                                            method: 'POST',
                                                                  headers: { "Content-Type": "application/json" },
                                                                        body: JSON.stringify({
                                                                                chat_id: TELEGRAM_CHAT_ID,
                                                                                        text: message,
                                                                                                parse_mode: 'Markdown'
                                                                                                      })
                                                                                                          });

                                                                                                              return res.json({ success: true, message: "تم إرسال طلبك بنجاح." });

                                                                                                                } catch (error) {
                                                                                                                    console.error("Error handling withdrawal:", error.message);
                                                                                                                        return res.status(500).json({ success: false, message: "حدث خطأ أثناء تنفيذ الطلب." });
                                                                                                                          }
                                                                                                                          });

                                                                                                                          export default router;
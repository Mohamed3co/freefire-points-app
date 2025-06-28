const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const { sendTelegramMessage } = require('../helpers/telegramNotifier');

const db = admin.firestore();

// قيمة النقاط المطلوبة للسحب
const MIN_POINTS = 1500;

router.post('/', async (req, res) => {
  const { uid, reward } = req.body;

    if (!uid || !reward) {
        return res.status(400).json({ success: false, message: 'البيانات غير مكتملة' });
          }

            try {
                const userRef = db.collection('users').doc(uid);
                    const doc = await userRef.get();

                        if (!doc.exists) {
                              return res.status(404).json({ success: false, message: 'المستخدم غير موجود' });
                                  }

                                      const userData = doc.data();
                                          const userPoints = userData.points || 0;

                                              if (userPoints < MIN_POINTS) {
                                                    return res.status(403).json({ success: false, message: 'الرصيد غير كافٍ' });
                                                        }

                                                            // خصم النقاط
                                                                await userRef.update({
                                                                      points: admin.firestore.FieldValue.increment(-MIN_POINTS)
                                                                          });

                                                                              // إرسال إشعار للتليغرام
                                                                                  await sendTelegramMessage(`🤑 طلب شحن جديد\n\n👤 UID: ${uid}\n🎁 الجائزة: ${reward}\n⭐ النقاط: ${MIN_POINTS}`);

                                                                                      res.json({ success: true, message: 'تم إرسال طلب السحب بنجاح' });

                                                                                        } catch (error) {
                                                                                            console.error('خطأ في معالجة طلب السحب:', error);
                                                                                                res.status(500).json({ success: false, message: 'حدث خطأ في الخادم' });
                                                                                                  }
                                                                                                  });

                                                                                                  module.exports = router;
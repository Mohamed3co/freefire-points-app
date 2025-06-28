const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const db = admin.firestore();

router.post('/', async (req, res) => {
  const { uid, offerId, eventType } = req.body;

    if (!uid || !offerId || !eventType) {
        return res.status(400).json({ success: false, message: 'بيانات غير مكتملة' });
          }

            try {
                const logRef = db.collection('analytics').doc();
                    await logRef.set({
                          uid,
                                offerId,
                                      eventType, // "view", "click", "complete", etc.
                                            timestamp: admin.firestore.FieldValue.serverTimestamp(),
                                                });

                                                    res.json({ success: true, message: 'تم تسجيل الحدث بنجاح' });
                                                      } catch (error) {
                                                          console.error("خطأ أثناء تسجيل التحليلات:", error);
                                                              res.status(500).json({ success: false, message: 'فشل في تسجيل البيانات' });
                                                                }
                                                                });

                                                                module.exports = router;
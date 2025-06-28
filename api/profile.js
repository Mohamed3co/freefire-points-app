const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const db = admin.firestore();

router.get('/:uid', async (req, res) => {
  const uid = req.params.uid;

    try {
        const userRef = db.collection('users').doc(uid);
            const doc = await userRef.get();

                if (!doc.exists) {
                      return res.status(404).json({ success: false, message: 'المستخدم غير موجود' });
                          }

                              const userData = doc.data();
                                  res.json({
                                        success: true,
                                              uid: uid,
                                                    points: userData.points || 0
                                                        });

                                                          } catch (error) {
                                                              console.error('خطأ في جلب بيانات المستخدم:', error);
                                                                  res.status(500).json({ success: false, message: 'حدث خطأ في الخادم' });
                                                                    }
                                                                    });

                                                                    module.exports = router;
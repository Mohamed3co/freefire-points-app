// /api/updatePoints.js

import { db } from './firebaseConfig.js';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import express from 'express';

const router = express.Router();

router.post('/updatePoints', async (req, res) => {
  const { userId, points } = req.body;

    if (!userId || points === undefined) {
        return res.status(400).json({ success: false, message: 'بيانات غير مكتملة' });
          }

            try {
                const userRef = doc(db, 'users', userId);
                    const userSnap = await getDoc(userRef);

                        if (userSnap.exists()) {
                              const currentPoints = userSnap.data().points || 0;
                                    await updateDoc(userRef, {
                                            points: currentPoints + points,
                                                  });
                                                      } else {
                                                            await setDoc(userRef, {
                                                                    points: points,
                                                                          });
                                                                              }

                                                                                  return res.status(200).json({ success: true, message: 'تم تحديث النقاط بنجاح' });
                                                                                    } catch (error) {
                                                                                        console.error('خطأ في تحديث النقاط:', error);
                                                                                            return res.status(500).json({ success: false, message: 'فشل تحديث النقاط' });
                                                                                              }
                                                                                              });

                                                                                              export default router;
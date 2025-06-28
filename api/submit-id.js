// api/submit-id.js
const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

router.post('/', async (req, res) => {
  const { uid, userId } = req.body;

    if (!uid || !userId) {
        return res.status(400).json({ success: false, message: "البيانات ناقصة" });
          }

            try {
                await db.collection('users').doc(uid).set({
                      userId: userId,
                            submittedAt: admin.firestore.FieldValue.serverTimestamp(),
                                }, { merge: true });

                                    res.json({ success: true, message: "تم حفظ الآي دي بنجاح" });
                                      } catch (error) {
                                          console.error("Error saving ID:", error);
                                              res.status(500).json({ success: false, message: "حدث خطأ أثناء الحفظ" });
                                                }
                                                });

                                                module.exports = router;
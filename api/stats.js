const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

router.get('/', async (req, res) => {
  try {
      // حساب عدد المستخدمين
          const usersSnapshot = await db.collection('users').get();
              const totalUsers = usersSnapshot.size;

                  // حساب مجموع النقاط
                      let totalPoints = 0;
                          usersSnapshot.forEach(doc => {
                                const user = doc.data();
                                      totalPoints += user.points || 0;
                                          });

                                              // حساب عدد طلبات السحب
                                                  const withdrawSnapshot = await db.collection('withdraw_requests').get();
                                                      const totalWithdrawRequests = withdrawSnapshot.size;

                                                          res.json({
                                                                success: true,
                                                                      totalUsers,
                                                                            totalPoints,
                                                                                  totalWithdrawRequests
                                                                                      });

                                                                                        } catch (error) {
                                                                                            console.error("فشل في حساب الإحصائيات:", error);
                                                                                                res.status(500).json({ success: false, message: "خطأ في الحساب" });
                                                                                                  }
                                                                                                  });

                                                                                                  module.exports = router;
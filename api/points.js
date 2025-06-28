// api/points.js

import {
  db,
    doc,
      getDoc,
        updateDoc
        } from './firebase.js';

        // 🔹 جلب نقاط المستخدم
        export async function getPoints(userId) {
          const userRef = doc(db, "users", userId);
            const userSnap = await getDoc(userRef);

              if (userSnap.exists()) {
                  return userSnap.data().points || 0;
                    } else {
                        throw new Error("User not found");
                          }
                          }

                          // 🔹 إضافة نقاط للمستخدم
                          export async function addPoints(userId, amount) {
                            const userRef = doc(db, "users", userId);
                              const current = await getPoints(userId);
                                await updateDoc(userRef, {
                                    points: current + amount
                                      });
                                      }

                                      // 🔹 خصم نقاط من المستخدم
                                      export async function subtractPoints(userId, amount) {
                                        const userRef = doc(db, "users", userId);
                                          const current = await getPoints(userId);
                                            if (current >= amount) {
                                                await updateDoc(userRef, {
                                                      points: current - amount
                                                          });
                                                              return true;
                                                                } else {
                                                                    return false; // رصيد غير كافٍ
                                                                      }
                                                                      }
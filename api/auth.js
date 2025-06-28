// api/auth.js

import {
  db,
    doc,
      getDoc,
        setDoc
        } from './firebase.js';

        // تسجيل دخول أو إنشاء مستخدم جديد
        export async function login(userId) {
          const userRef = doc(db, "users", userId);
            const userSnap = await getDoc(userRef);

              if (userSnap.exists()) {
                  // المستخدم موجود، نعيد بياناته
                      return userSnap.data();
                        } else {
                            // المستخدم غير موجود، ننشئ حساب جديد بنقاط 0
                                const newUser = {
                                      points: 0,
                                            createdAt: new Date().toISOString()
                                                };
                                                    await setDoc(userRef, newUser);
                                                        return newUser;
                                                          }
                                                          }
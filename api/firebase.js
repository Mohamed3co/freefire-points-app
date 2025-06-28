// api/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
    collection,
      doc,
        setDoc,
          getDoc,
            updateDoc,
              increment
              } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

              // إعداد Firebase (معلومات حقيقية حسب ما وفرت سابقاً)
              const firebaseConfig = {
                apiKey: "AIzaSyDt7mDQuazUHDQyxwS3fXRDbyyTCYdeTrI",
                  authDomain: "freefirerewardsdz-69572.firebaseapp.com",
                    projectId: "freefirerewardsdz-69572",
                      storageBucket: "freefirerewardsdz-69572.appspot.com",
                        messagingSenderId: "145782934523",
                          appId: "1:145782934523:web:76a2f7c4d2e37f94d6595e"
                          };

                          // بدء التطبيق
                          const app = initializeApp(firebaseConfig);
                          const db = getFirestore(app);

                          // تصدير القيم لاستخدامها في باقي الملفات
                          export {
                            db,
                              collection,
                                doc,
                                  setDoc,
                                    getDoc,
                                      updateDoc,
                                        increment
                                        };
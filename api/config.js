// /api/config.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// إعدادات Firebase الخاصة بك (تم توفيرها مسبقًا)
const firebaseConfig = {
  apiKey: "AIzaSyDxGQpVkQ6dnciYlGIVv7EDH_BFy1XLJek",
    authDomain: "freefirerewardsdz-69572.firebaseapp.com",
      projectId: "freefirerewardsdz-69572",
        storageBucket: "freefirerewardsdz-69572.appspot.com",
          messagingSenderId: "145782934523",
            appId: "1:145782934523:web:76a2f7c4d2e37f94d6595e"
            };

            // تهيئة التطبيق وربط قاعدة البيانات
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            export { db };
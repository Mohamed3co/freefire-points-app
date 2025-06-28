// /api/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0N4t8tOuf2RnJxyf0lIKs0fe0vCCkBGE",
    authDomain: "freefirerewardsdz-69572.firebaseapp.com",
      projectId: "freefirerewardsdz-69572",
        storageBucket: "freefirerewardsdz-69572.appspot.com",
          messagingSenderId: "145782934523",
            appId: "1:145782934523:web:76a2f7c4d2e37f94d6595e"
            };

            // تهيئة التطبيق وربط Firestore
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            export { db };
// /api/saveUser.js

import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './config.js';

export async function saveUser(userId) {
  const userRef = doc(collection(db, 'users'), userId);

    const userData = {
        points: 0,
            createdAt: new Date().toISOString()
              };

                await setDoc(userRef, userData, { merge: true });
                }
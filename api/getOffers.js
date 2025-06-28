// /api/getOffers.js

import fetch from 'node-fetch';

export async function getOffers(trackingId = 'default_id') {
  const PRIVATE_KEY = '3f2682325b819c43e34f23f6d074a4c8';
    const USER_ID = '2407883';
      const COUNTRY = 'US'; // يمكن تغييره ديناميكياً
        const LIMIT = 10;

          const url = `https://www.cpagrip.com/common/offer_feed_json.php?user_id=${USER_ID}&key=${PRIVATE_KEY}&tracking_id=${trackingId}&limit=${LIMIT}&country=${COUNTRY}&showall=true`;

            try {
                const res = await fetch(url);
                    const data = await res.json();
                        return data.offers || [];
                          } catch (err) {
                              console.error('Failed to fetch offers:', err);
                                  return [];
                                    }
                                    }
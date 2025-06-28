const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const path = require('path');

// 🔹 إذا كان firebase.js يحتوي بيانات JSON للمفاتيح
const serviceAccount = require('./firebase.js');

const app = express();

// ميدل وير
app.use(cors());
app.use(bodyParser.json());

// 🔹 Firebase init
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  });

  // 🔹 تقديم ملفات ثابتة (لو عندك script.js, style.css, ... الخ)
  app.use(express.static(path.join(__dirname)));

  // 🔹 تقديم صفحة index.html عند زيارة الموقع
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    });

    // 🔹 Routes API
    app.use('/api/submit-id', require('./api/submit-id'));
    app.use('/api/request-withdrawal', require('./api/request-withdrawal'));
    app.use('/api/update-points', require('./api/updatePoints'));

    // لو عندك api/getOffers.js وتريد تقدم العروض:
    app.use('/api/get-offers', async (req, res) => {
      const { getOffers } = require('./api/getOffers.js');
        try {
            const offers = await getOffers();
                res.json({ offers });
                  } catch (err) {
                      console.error('خطأ في جلب العروض:', err);
                          res.status(500).json({ error: 'فشل في جلب العروض' });
                            }
                            });

                            const PORT = process.env.PORT || 3000;
                            app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
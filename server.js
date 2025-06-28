const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint رئيسي للتأكد أن السيرفر شغال
app.get('/', (req, res) => {
  res.send('🚀 السيرفر يعمل!');
});

// Endpoint يعرض العروض
app.get('/offers', (req, res) => {
  res.json({
    offers: [
      {
        id: 1,
        title: "عرض تجريبي 1",
        description: "هذا عرض للتجربة.",
        payout: "2.50",
        offerlink: "https://example.com",
        offerphoto: "https://via.placeholder.com/150"
      },
      {
        id: 2,
        title: "عرض تجريبي 2",
        description: "عرض آخر للتجربة.",
        payout: "3.00",
        offerlink: "https://example.com",
        offerphoto: "https://via.placeholder.com/150"
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

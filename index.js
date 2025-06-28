// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// ✅ هنا غيرنا المسار ليتوافق مع اللي عندك فعلاً
const withdrawRoute = require('./api/requestWithdrawal');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('🚀 السيرفر يعمل!');
});

// هنا مسار سحب النقاط
app.use('/withdraw', withdrawRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

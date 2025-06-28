const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('🚀 السيرفر يعمل!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 سيرفر Omar.Cam جاهز للبث المباشر!');
});

app.listen(PORT, () => {
  console.log('✅ السيرفر شغال!');
});

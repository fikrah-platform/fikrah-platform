require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('مرحبًا بك في fikrah-ai-hub 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});

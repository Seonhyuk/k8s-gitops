const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'CI/CD is working! 🚀',
    version: '3.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', version: '3.0' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server v3.0 running on port ${PORT}`);
});
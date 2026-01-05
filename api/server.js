const express = require('express');
const app = express();
const PORT = 3000;

setTimeout(() => {
  console.log('Crashing intentionally!');
  process.exit(1);
}, 10000);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Buggy version! Will crash soon...',
    version: 'v3.0-buggy'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server v3.0-buggy running on port ${PORT}`);
});
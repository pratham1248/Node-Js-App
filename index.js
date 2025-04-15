const PORT = 3000;
const HOST = '0.0.0.0';  // Allows connections from outside

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Node.js!'));
app.listen(PORT, HOST, () => console.log(`Server is running at http://${HOST}:${PORT}`));


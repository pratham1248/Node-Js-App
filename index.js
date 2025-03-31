const express = require('express');
const app = express();

const PORT = 3000;

// Example route
app.get('/', (req, res) => {
    res.send('Hello, world! Your Node.js app is running.');
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

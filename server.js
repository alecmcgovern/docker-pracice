const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', function (req, res) {
    res.send({ data: 1234 });
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
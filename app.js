const express = require('express');
const router = express.router();
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());



module.exports = router;
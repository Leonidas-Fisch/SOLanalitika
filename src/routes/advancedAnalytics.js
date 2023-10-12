const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Advanced Analytics Feature Coming Soon!');
});

module.exports = router;

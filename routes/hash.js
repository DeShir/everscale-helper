const express = require('express');
const blake = require('blakejs');
const router = express.Router();

/* GET helper listing. */
router.get('/blake/:data', (req, res, _) => {
    const match = req.params.data.match(/[\da-f]{2}/gi);
    const data = new Uint8Array(match.map((h) => parseInt(h, 16)));
    res.send(blake.blake2bHex(data, null, 32));
});

module.exports = router;

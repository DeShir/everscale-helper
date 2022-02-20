const express = require('express');
const blake2b = require('blake2b');
const router = express.Router();

/* GET helper listing. */
router.get('/blake/:data', (req, res, _) => {
    let data = req.params.data
    let output = new Uint8Array(32)
    let input = Buffer.from(data)
    res.send(blake2b(output.length).update(input).digest('hex'));
});

module.exports = router;

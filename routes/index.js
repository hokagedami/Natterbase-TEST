const express = require('express');
const router = express.Router();
const validate = require('../modules/validate');
const removeAttribute = require('../modules/remove-attribute');
const lowestIndex = require('../modules/lowest-index');

router.post('/validate', ((req, res) => {
    const { data, rules } = req.body;
    const validity = validate(data, rules);
    validity.error ? res.status(400).json(validity) : res.send(validity);
}));

router.post('/remove-attribute', ((req, res) => {
    const { data, item } = req.body;
    const result = removeAttribute(data, item);
    if (result === 'attribute not found') {
        res.status(404).send(result);
    } else {
        res.send(result);
    }
}));

router.post('/lowest-index', ((req, res) => {
    const { magicSources, distances } = req.body;
    const index = lowestIndex(magicSources, distances);
    console.log(index);
    res.send({index})
}));

module.exports = router;

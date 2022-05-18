const express = require('express');

const router = express.Router();

const skillModel = require('../models/skill');


router.get('/skills', (req, res) => {

    skillModel.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);

        })
        .catch(() => {
            console.log('Error: ', error);

        })

})




module.exports = router;
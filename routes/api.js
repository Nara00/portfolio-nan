const express = require('express');

const router = express.Router();

const skillModel = require('../models/skill');

const projectModel = require('../models/project');


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

router.get('/projects', (req, res) => {

    projectModel.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);

        })
        .catch(() => {
            console.log('Error: ', error);

        })

})




module.exports = router;
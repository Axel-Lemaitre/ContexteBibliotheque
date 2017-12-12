var express = require('express');
var router = express.Router();

    let controllerAndroid = require('../controller/controllerAndroid');

    router.get('/', controllerAndroid.livre_list);

module.exports = router;
const tokencontrlloer = require('../controllers/token');
const express=require('express');
var router=express.Router();
router.route('/').post(tokencontrlloer.createtoken);
module.exports=router;
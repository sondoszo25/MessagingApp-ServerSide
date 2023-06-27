const firebasecontrlloer = require('../controllers/firebase');

const express=require('express');
var router=express.Router();
router.route('/').post(firebasecontrlloer.gettoken);

module.exports=router;
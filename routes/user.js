const usercontrlloer = require('../controllers/user');
const express=require('express');
var router=express.Router();
router.route('/').post(usercontrlloer.createUser);
router.route('/:id').get(usercontrlloer.isLoggedIn,usercontrlloer.index);

module.exports=router;
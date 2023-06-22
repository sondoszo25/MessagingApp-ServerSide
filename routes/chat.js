const chatcontrlloer = require('../controllers/chat');
const usercontrlloer = require('../controllers/user');
const messagecontrlloer = require('../controllers/message');

const express=require('express');
var router=express.Router();
router.route('/').post(usercontrlloer.isLoggedIn2, (req, res) => {
    const tokenData = req.tokenData;
    chatcontrlloer.createchat(req, res, tokenData.username);
  });
  router.route('/').get(usercontrlloer.isLoggedIn2, (req, res) => {
    const tokenData = req.tokenData;
    chatcontrlloer.getchat(req, res, tokenData.username);
  });
  router.route('/:id' + "/Messages").post(usercontrlloer.isLoggedIn2, (req, res) => {
    const tokenData = req.tokenData;
    messagecontrlloer.sendmessage(req, res, tokenData.username);
  });

  router.route('/:id' + "/Messages").get(usercontrlloer.isLoggedIn2, (req, res) => {
    const tokenData = req.tokenData;
    messagecontrlloer.getmessage(req, res, tokenData.username);
  });

  router.route('/:id').delete(usercontrlloer.isLoggedIn2, (req, res) => {
    const tokenData = req.tokenData;
    chatcontrlloer.deletethechat(req,res,tokenData.username)
 });

 router.route('/:id').get(usercontrlloer.isLoggedIn2, (req, res) => {
  const tokenData = req.tokenData;
  chatcontrlloer.getthechat(req,res,tokenData.username)
 });

 
  

  module.exports = {
    router,
    setSocket: (socketIO) => {
      chatcontrlloer.updateIO(socketIO);
      messagecontrlloer.updateIO(socketIO);
    }
  };
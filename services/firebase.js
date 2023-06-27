const Chat=require('../models/chat');
var admin = require("firebase-admin");
const path = require('path');
const serviceAccountPath = path.resolve(__dirname, '../secret', 'firebase.json');

var serviceAccount = require(serviceAccountPath);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var registrationToken =[];



const messaging = admin.messaging();

const sendupdateMessage = async (id, sender) => {
    const chat = await Chat.findOne({ $and: [{ id: id }, { username: sender.username }] });
    const receiver = chat.user.username;
  

    const message = {
      data: {
        reciver: receiver,
        sender: sender.username
      },
      tokens: registrationToken
    };
  
    admin.messaging().sendMulticast(message)
      .then((response) => {
        if (response.failureCount > 0) {
          const failedTokens = [];
          response.responses.forEach((resp, idx) => {
            if (!resp.success) {
              failedTokens.push(registrationTokens[idx]);
            }
          });
          console.log('List of tokens that caused failures:', failedTokens);
        }
      })
      .catch((error) => {
        console.log('Error sending multicast message:', error);
      });
  };
  
  


  const sendupdatecontact = async (id) => {
    const message = {
      data: {
        reciver: "receiverblha",
        sender: "receiverblhanoz"
      },
      tokens: registrationToken
    };
  
    admin.messaging().sendMulticast(message)
      .then((response) => {
        if (response.failureCount > 0) {
          const failedTokens = [];
          response.responses.forEach((resp, idx) => {
            if (!resp.success) {
              failedTokens.push(registrationTokens[idx]);
            }
          });
          console.log('List of tokens that caused failures:', failedTokens);
        }
      })
      .catch((error) => {
        console.log('Error sending multicast message:', error);
      });
  };







  const gettoken=async(token) =>{
    let tokenExists = false;

    registrationToken.forEach((existingToken) => {
      if (existingToken === token) {
        tokenExists = true;
        return;
      }
    });
    
    if (!tokenExists) {
      registrationToken.push(token);
      return true;
    }
    return false;
 }



 module.exports={
    gettoken,sendupdateMessage,sendupdatecontact
}
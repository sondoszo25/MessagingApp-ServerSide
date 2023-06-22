const express = require('express');
const server = express()

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));
const jwt = require("jsonwebtoken");
const path = require('path');
const cors = require('cors');
server.use(cors());

require('custom-env').env(process.env.NODE_ENV, "./config");


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check MongoDB connection state
const checkMongoDBStatus = () => {
  const state = mongoose.connection.readyState;
  switch (state) {
    case 0:
      console.log('MongoDB Disconnected');
      break;
    case 1:
      console.log('MongoDB Connected');
      break;
    case 2:
      console.log('MongoDB Connecting');
      break;
    case 3:
      console.log('MongoDB Disconnecting');
      break;
    default:
      console.log('MongoDB Unknown');
      break;
  }
};

// Check MongoDB status on server start
checkMongoDBStatus();


const http=require('http');
const {Server} =require("socket.io");

const server2=http.createServer(server);

const io = new Server(server2,{
  cors:{
   origin:{
    origin:"http://localhost:3000",
    methods:["GET","POST"],
   }
  },
})

server.get('/Register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


server.get('/Chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


server.use(express.json({limit: '50mb', extended: true }));
server.use(express.urlencoded({limit: '50mb',extended: true}));
const routeuser=require('./routes/user');
const routtoken=require('./routes/tokens');
const routchat=require('./routes/chat');
server.use(express.static('public'));
server.use('/api/Users',routeuser);
routchat.setSocket(io);
server.use('/api/Tokens',routtoken);
server.use('/api/Chats',routchat.router);
server2.listen(process.env.PORT);


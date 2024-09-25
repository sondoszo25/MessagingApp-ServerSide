
# MessagingApp-ServerSide
This part of the project involves setting up the server to handle requests from the client-side application. Below is a detailed guide on how the server operates, the endpoints it provides, and how to run it locally.

# Overview:
The client application, which is built in a separate repository, has been integrated into this server by running npm run build to generate a production-ready build folder. This folder is added to the server project, enabling the client to communicate with the server.
The server runs on port 5000 and provides various REST API endpoints for chat functionality, user management, and token generation.
API Endpoints
# 1. Chats
Endpoint: http://localhost:5000/api/Chats
* POST: Creates a new chat.
* GET: Retrieves all chats associated with the current user.
# 2. Tokens
Endpoint: http://localhost:5000/api/Tokens
* POST: Generates a JWT (JSON Web Token) for users attempting to log in.
# 3. Users
Endpoint: http://localhost:5000/api/Users
* POST: Creates a new user.

Endpoint: http://localhost:5000/api/Users/:id
* GET: Returns details of the user with the specified id.

# 4. Messages within Chats
Endpoint: http://localhost:5000/api/Chats/:id/Messages
* GET: Returns all messages exchanged between users in the chat with the specified id.
* POST: Sends a message in the chat with the specified id.
  
# 5. Managing Chats
Endpoint: http://localhost:5000/api/Chats/:id

* DELETE: Deletes the chat with the specified id.
* GET: Retrieves all messages for the user with the specified id.



# To start the server, follow these steps:

1. Ensure MongoDB is running on port 27017.
2. Open a terminal in the server project directory.
3. Run the following command to start the server:
```
npm start

```
Alternatively, you can use:
```
SET NODE_ENV=local && node server.js

```
4. Once the server is running, open your browser and go to  http://localhost:5000  to access the application.

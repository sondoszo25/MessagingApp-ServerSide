# mtkdem2-targel2-part2+3


in this part we build a server.
we took the client we made (which exist in another repo) then we did "npm run build" after that we got a build folder and we added it to this project.
and the client we made can talk with this server.
our server is running in port 5000,  which can gives responses to these:

a) http://localhost:5000/api/Chats :

    1)in POST: it creates a new Chat
    2)in GET: it gives us all the chats of the current user

b)http://localhost:5000/api/Tokens : in POST it creates a jwt for the user who want to log in

c)http://localhost:5000/api/Users : in POST: creates a new user

d)http://localhost:5000/api/Users/:id : in GET returns all the details about the user with the id in the link.

e)http://localhost:5000/api/Chats/:id/Messages/ : 

    1)in GET: returns all the masseges between the users which are
    talking in the chat with this id.

    2)in POST: send the meassge that its id located in the link.
    
d)http://localhost:5000/api/Chats/:id :

    1)in DELETE: deletes the chat which  its id located in the link.
    
    2)in GET: gets all the messeges for the user who's his id is the id located in the link.
    

to add a contact you should click on the "person with plus" button and than type his username (not his display name), the user must be registered to be able to add it.


to delete a contact you should press on the button of "wastebasket" near the "add contact" button , and then type the name of the contact you want to delete.
 


we are saving all the data we get from the users in Mongodb, which is running in port 27017.



*to run this code first you must make sure that mongodb is connected to the port above(27017) and after that in the terminal
of this project write "npm start" (the start instruction is the same as the instruction"SET NODE_ENV=local && node server.js") and in the browser go to localhost:5000*

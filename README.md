# CRUD_

I have created a basic restAPI for CURD operations using node js + express js
I have also used mongoDB as database and mongoose as tool

To Run the repository:


1. npm init(in root folder) =>set packageName to "crus_js" =>entryPoint to "app.js"  => author as "ksp"
2. npm install -g express
3. npm install -g nodemon
4. npm install -g mongoDB
5. npm install -g mongoose
6. Edited script to => "start": "nodemon app.js"
7. created js file as app.js{
            1. imported express
            2. imported mongoose
            3. created url as 'mongodb://localhost/AlienDBexg'
            4. started express framework
            5. connected application with database using mongoose.connect(url),url is connecting express framework(nodejs) with mongodDB and mongoDB is connecting with database MyFirstDB
               created a call back function,printed connected msg in terminal.
            6. specified to use express framework schema
            7. imported routers(aliens) as alienRouter as defining GET,POST,PATCH,DELETE in aliens.js and using in app.js
            9. specified listening port as '2000'.


To run and test the api in PostMan:
 1. use url 'http://localhost:2000/aliens'
 2. create get request to check method(should return empty as no data stored).
 3. write in body=>raw using JSON syntax:
                {
                    "name":"Alexa",
                    "tech":"Ai",
                    "sub":"true"
                }
4. Send post request.

# ImageApp

## Introduction
This api was built using NodeJS and PostgreSQL.

This api supports:
- Uploading images to the database
- Deleting images from the database
- Downloading images from the database
- Getting a list of all the images in the database

## Tools
1. NodeJS: runtime environment outside of browser.
2. Express: Node.js web app framework used to make a server for this application.
3. ProsgreSQL: SQL open source relational database system used to store data.
4. Sequelize: Object relational mapper used to communicate with PostgreSQL database.
5. Multer: middleware used for handling file upload.  
6. ES6: Javascript version.
7. Postman: software used to interact with the api.

## Installation
* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.
* Edit the config/config.js file to enable access to your PostgreSQL database.

## API Endpoints
POST http://127.0.0.1:3000/api/images // upload an image file  
DELETE http://127.0.0.1:3000/api/images/:id // delete image with id ":id"  
GET http://127.0.0.1:3000/api/images // get a list of image names and ids  
GET http://127.0.0.1:3000/api/images/:id // get an image file with id ":id"  
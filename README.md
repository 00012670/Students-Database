# Students-Database


## Description

The web application is designed to manage a database in which you can create, delete and update student data. To optimize the effectiveness of the application, additional functions have been added, such as sorting and searching.

To create a new student, you should use the navigation bar and click on the "New Student" link. The form will appear on another creation page, which you need to fill out with all the necessary information and press "submit" button. The data about the new student will be saved on the homepage. 
There is a trash icon on the main page where you can delete student data. To update the extising information you need to press a pen icon. 
Searching fucntion was implemented by Name and sorting by Courses


## Instructions on how to run the app locally 

Before starting project, first you should install mongodb and npm packages

hosted link

```bash
npm install
```

Then, to start project run following command 

```bash
node server.js
```
if you have nodemon package run following command

```bash
nodemon server
```

Open http://localhost:3000 to view it in the browser.



## Application dependencies’ list

Express
Ejs
Nodemon
Mongoose
Body-parser
Dotenv


## Architecture of the project 

1. helper
    - db.js
2. public
    /css
    /js
3. views 
    /include
    - footer.ejs
    - header.ejs
    - create.ejs
    - index.ejs
    - notfound.ejs
    - update.ejs
4. package-lock.json
5. package.json
6. server.js



## Links

github link -->
https://github.com/00012670/Students-Database.git

hosted link -->

# Hello World !

This repository is for an open source project which consists in create an tuto
for who want learn how to program ! This tuto is for everybody, and the language
used in this tuto is **JAVASCRIPT** with **NODE JS**

Anybody want to contribute for add new features or just to improve the already
tuto is welcome !

For start, you can learn all step write in this document (The Readme File).

# First step is installing all tools, and configure you environement.
 ### To first you have a multiple text editor choice.
 You can use [Atom](https://atom.io/), or [VS Code](https://code.visualstudio.com/), or whatever but this two tools are
 open source and are really new and regular update.

 ### To second, you must install **[Node JS](https://nodejs.org)** in your system.
 Select the last version for have all new features. And all security update.

 ### The third, is the browser.
 You can use [Firefox](https://www.mozilla.org/en-US/firefox/new/) or [chrome](https://www.google.com/chrome/browser/desktop/index.html), these are the two best browser.

 ### The fouth, is git.
 Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.

 If you are on **Linux**, you may use your package manager. On **Mac**, git is already
 installed. To find out, open terminal and enter ``` git --version ```.
 If you are on windows, you must install git with an installer. To do this, you must
 download Git in official website [Git SCM](https://git-scm.com/downloads).

# Now we can create our first program with Node JS.
 Create new project folder and in this, create new file *server.js*. In this file, write this code:
 ```
 const http = require('http');

 let server = http.createServer((req, res) => {
   res.end("Hello World!");
 })

 server.listen(3000, () => {
   console.log("Server listen on http://localhost:3000");
 });
 ```
 The first line : ``` const http = require('http'); ```  ``` const ``` is language word to declare variable and get a value http library. Now you can use the http library in use ```http. ```whatever (functions in this library). For know the avalaible function, you can go on [Node Documentation](https://nodejs.org/dist/latest-v9.x/docs/api/http.html).
 The second line:
 ```
 let server = http.createServer((req, res) {
   res.end("Hello World!");
 })```
 We declare a variable with the name "server", and we attribute a in a value, a http function createServer(). We add http dot before to indicate at Node JS in what library he can search this function. This function get in parameter a function. This function get 2 parameters, req and res. Req is a request send to server and res is server response to user.   

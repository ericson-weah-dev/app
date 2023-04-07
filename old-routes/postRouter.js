
"use strict";

/*
|--------------------------------------------------------------------------
| User Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register users routes for your application. These
| routes are first mounted to the Router (see Router Class in /src/Router.js)
| and then to the  App (See  App Class in /src/App.js)
| Now create something great!
|
*/
module.exports = app => {    
    app.get("/posts", (req, res, next) => {});
    app.post("/posts", (req, res, next) => {});
    app.get("/posts/:id", (req, res, next) => {});
    app.post('/posts/:id', (req, res, next) => {})
    app.put("/posts/:id", (req, res, next) => {});
    app.delete("/posts/:id", (req, res, next) => {});  
}

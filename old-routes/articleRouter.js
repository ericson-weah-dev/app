
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
    app.get("/articles", (req, res, next) => {});
    app.post("/articles", (req, res, next) => {});
    app.get("/articles/:id", (req, res, next) => {});
    app.post('/articles/:id', (req, res, next) => {})
    app.put("/articles/:id", (req, res, next) => {});
    app.delete("/articles/:id", (req, res, next) => {});  
}

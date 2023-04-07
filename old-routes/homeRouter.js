
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
    app.get("/homes", (req, res, next) => {});
    app.post("/homes", (req, res, next) => {});
    app.get("/homes/:id", (req, res, next) => {});
    app.post('/homes/:id', (req, res, next) => {})
    app.put("/homes/:id", (req, res, next) => {});
    app.delete("/homes/:id", (req, res, next) => {});  
}

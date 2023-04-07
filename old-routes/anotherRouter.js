
"use strict";

const Router = require('undefined');

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
    
    const Route = new Router(app);

    Route.get("/anothers", (req, res, next) => {});
    Route.post("/anothers", (req, res, next) => {});
    Route.get("/anothers/:id", (req, res, next) => {});
    Route.post('/anothers/:id', (req, res, next) => {})
    Route.put("/anothers/:id", (req, res, next) => {});
    Route.delete("/anothers/:id", (req, res, next) => {});  
}

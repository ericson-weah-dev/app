
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

    Route.get("/aoks", (req, res, next) => {});
    Route.post("/aoks", (req, res, next) => {});
    Route.get("/aoks/:id", (req, res, next) => {});
    Route.post('/aoks/:id', (req, res, next) => {})
    Route.put("/aoks/:id", (req, res, next) => {});
    Route.delete("/aoks/:id", (req, res, next) => {});  
}

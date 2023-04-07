
"use strict";

const Router = require('../..//modules/router');

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

    Route.get("/andres", (req, res, next) => {});
    Route.post("/andres", (req, res, next) => {});
    Route.get("/andres/:id", (req, res, next) => {});
    Route.post('/andres/:id', (req, res, next) => {})
    Route.put("/andres/:id", (req, res, next) => {});
    Route.delete("/andres/:id", (req, res, next) => {});  
}

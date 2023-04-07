
"use strict";

const Router = require('../../../../');

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

    Route.get("/demaisons", (req, res, next) => {});
    Route.post("/demaisons", (req, res, next) => {});
    Route.get("/demaisons/:id", (req, res, next) => {});
    Route.post('/demaisons/:id', (req, res, next) => {})
    Route.put("/demaisons/:id", (req, res, next) => {});
    Route.delete("/demaisons/:id", (req, res, next) => {});  
}

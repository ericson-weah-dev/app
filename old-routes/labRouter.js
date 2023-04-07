
"use strict";

const Router = require('../../../router');

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

    Route.get("/labs", (req, res, next) => {});
    Route.post("/labs", (req, res, next) => {});
    Route.get("/labs/:id", (req, res, next) => {});
    Route.post('/labs/:id', (req, res, next) => {})
    Route.put("/labs/:id", (req, res, next) => {});
    Route.delete("/labs/:id", (req, res, next) => {});  
}

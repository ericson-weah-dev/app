'use strict';
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
    require("./andreRouter")(app);        
    require("./anotherRouter")(app);        
    require("./aokRouter")(app);        
    require("./articleRouter")(app);        
    require("./blog/postRouter")(app);        
    require("./demaisonRouter")(app);        
    require("./forumRouter")(app);        
    require("./homeRouter")(app);        
    require("./jeanRouter")(app);        
    require("./labRouter")(app);        
    require("./postRouter")(app);        
    require("./userRouter")(app);        
    require("./youRouter")(app);        
    require("./yoursRouter")(app);        
    
}
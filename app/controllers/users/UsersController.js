'use strict'

/** 
 * @author Ericson S. Weah 
 *     email: ericson.weah@ericsonweah.dev
 *     phone: +1.385.436.1984
 *     website: https://www.ericsonweah.com
 *     github: https://github.com/ericsonsweah
 * 
 * 
 * @module UsersController
 * @kind class
 * 
 * @extends Transform
 * @requires Transform
 * 
 * @classdesc UsersController class
 */

class UsersController extends require('../Controller') {

    constructor(...arrayOfObjects) {

        super({ objectMode: true, encoding: "utf-8", autoDestroy: true });
    
        arrayOfObjects.forEach(option => {
            if(Object.keys(option).length > 0){
                Object.keys(option).forEach((key) => { if(!this[key]) this[key] = option[key];})
            }
        });
    
        // auto bind methods
        this.autobind(UsersController);
        // auto invoke methods
        this.autoinvoker(UsersController);
        // add other classes method if methods do not already exist. Argument order matters!
        // this.methodizer(..classList);
        //Set the maximum number of listeners to infinity
        this.setMaxListeners(Infinity);
      }
    
    async index(req, res) {}
    async store(req, res) {}
    async edit(req, res) {}
    async show(req, res) {}
    async update(req, res) {}
    async destroy(req, res) {}

}
module.exports = UsersController
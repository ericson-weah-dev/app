const {createWriteStream} = require('fs')

const writable = createWriteStream('db.js', 'utf8') 


writable.write(`const conn = new Mongo();\n`)
writable.write(`const db = conn.getDB("apps");\n`)
writable.write(`db.contacts.find({});\n`)

writable.end();


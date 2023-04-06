const conn = new Mongo();
const db = conn.getDB("apps");
db.contacts.find({});

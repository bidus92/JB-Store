const mongodb = require("mongodb"); 

const client = new mongodb.MongoClient("mongodb+srv://bydus:ShohhEQHVE2mXzYL@users.p4bafiz.mongodb.net/?retryWrites=true&w=majority&appName=users"); 


function getDb()
{
    client.connect();
    client.db("JB_Store");
}


module.exports = getDb; 
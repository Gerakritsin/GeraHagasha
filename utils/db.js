const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user:useruser@cluster0.b1fdelw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client;

const client = require('./db');
module.exports.register = function register(mail, password){
    // connect to database
    client.connect(err=>{
        var collection = client.db("db").collection("users");
        // add user
        collection.insertOne({mail: mail, password:password}).then(()=>{
          console.log("User Created");
          return {success:true};
        }).catch(err=>{
            return {success:false, error: err};
        });
      });
}


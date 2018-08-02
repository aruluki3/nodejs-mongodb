var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var don = db.db("music");
  don.createCollection("songdetails", function (err, res) {
    if (err) throw err;
    console.log("crated collection!");
    db.close();
  });
});

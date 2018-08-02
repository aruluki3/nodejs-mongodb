var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var don =db.db("music");
  var mysinger = {Singer: "Unnikrishnan,Anuradha Sriram"};
  don.collection("songdetails").remove(mysinger, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

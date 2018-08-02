var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
if (err) throw err;
var don = db.db("music");

don.collection("songdetails").find({}, { Singer: 1,_id: 0}).toArray(function (err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
});

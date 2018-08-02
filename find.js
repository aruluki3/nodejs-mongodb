var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
if (err) throw err;
var don = db.db("music");
var query = {MusicDirector: "A.R.Rahman"};
don.collection("songdetails").find(query).toArray(function (err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myquery = {songname: "Evano Oruvan" };
  var newvalues = { $set: {songname: "Evano Oruvan", film: "Alai Payuthey", MusicDirector: "A.R.Rahman", Singer: "Swarnalatha" } };
  dbo.collection("songdetails").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});

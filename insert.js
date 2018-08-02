var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var don = db.db("music");
  var namedetail = [
    {songname: 'Thaniye Thananthaniye', film: 'Rhythm', Musicdirector: 'A.R.Rahman', Singer: 'Shankar mahadevan'},
    {songname: 'Evano Oruvan', film: 'Alai Payuthey', MusicDirector: 'A.R.Rahman', Singer: 'Swarnalatha'},
    {songname: 'Roja Poonthottam', film: 'Kannukkul Nilavu', MusicDirector: 'Ilaiyaraaja', Singer: 'Unnikrishnan,Anuradha Sriram'},
    {songname: 'Vennilavae Vennilavae Vinnaithaandi', film: 'Minsara Kanavu', MusicDirector: 'A.R.Rahman', Singer: 'Hariharan,Sadhana Sargam'},
    {songname: 'Sollamal Thottu Chellum Thendral', film: 'Dheena', MusicDirector: 'Yuvan Shankar Raja', Singer: 'Hariharan'}

  ];
   don.collection("songdetails").insertMany(namedetail, function (err, res) {
     if (err) throw err;
     console.log("name details insert: " + res.insertedCount);
    db.close();
  });
});

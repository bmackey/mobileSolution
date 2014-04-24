/*
 Inserts an object (document) into a collection in MongoDB
 @param params.insert an object to insert into your database
 @param params.collection the collection to insert it into
 */

var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;


var user = "bmackey",
  password = "doireann",
  upString = (typeof user === 'string' && typeof password === 'string') ? user + ":" + password : "",
  database = "xpoit",
  host = "ds039487.mongolab.com:39487";

exports.findAll = function(params, cb) {

  console.log("I am here!!!");

  MongoClient.connect('mongodb://' + upString + '@' + host + '/' + database, function(err, db) {
    if (err) {
      return cb(err);
    }

    var collection = db.collection("records");
    collection.find().sort({
      project: 1
    }).toArray(
      function(error, items) {
        var studentList = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          studentList.push({
            project: item.project,
            fname: item.fname,
            lname: item.lname,
            email: item.email,
            course: item.course,
            title: item.title,
            commercial: item.commercial,
            desc: item.description,
            disciplines: item.disciplines
          });
        }
        if (studentList) {
          return cb(error, studentList);
        }

      });
  });
};
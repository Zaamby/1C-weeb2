var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost/sandbox";

mongoClient.connect(url, function(err, db) {
    if (!err) {
        var books = db.collection("books");
        books.find({year : { $gte: 1970, $lte: 2000} }).toArray(function(err, documents) {
            documents.forEach(function(book) {
                console.log(book.name + ", " + book.year);
            });
        });

    } else {
        console.log("Culdn't connect");
    }
});
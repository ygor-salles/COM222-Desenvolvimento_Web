var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

const database = "loja";

// Criando database e schema
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    dbo.createCollection('notes', function (err, res) {
        if (err) throw err;
        console.log("Collection Notes created!");
        db.close();
    });
});

// inserindo no database
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    var myobj = [
        {
            code: 1,
            description: "Calça jeans masculina Levis",
            value: 10,
        }, {
            code: 2,
            description: "Camiseta Nike",
            value: 20,
        }, {
            code: 3,
            description: "Blusa Adidas",
            value: 30,
        }, {
            code: 4,
            description: "Tênis Nike",
            value: 40,
        }, {
            code: 5,
            description: "Short Lacoste",
            value: 50,
        }
    ];

    dbo.collection('products').insert(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");

    })

    db.close();
});
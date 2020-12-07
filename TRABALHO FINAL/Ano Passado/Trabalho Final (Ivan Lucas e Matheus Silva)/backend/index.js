const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
var cors = require('cors');
app.use(cors());
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router); // requisições que chegam na raiz devem ser enviadas para o router

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

// Mongo
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
const database = "menu";

router.get('/products/:id?', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        if (req.params.id){
            var ObjectId = require('mongodb').ObjectId; 
            var o_id = new ObjectId(req.params.id);

            dbo.collection('products').findOne({_id: o_id}, function (err, results) {
                if (err)
                    res.json(err);
                else
                    res.json(results);
            });
        }
        else{
            dbo.collection('products').find().toArray(function (err, results) {
                if (err)
                    res.json(err);
                else
                    res.json(results);
            });
        }

    });
});

router.get('/types', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        dbo.collection('types').find().toArray(function (err, results) {
            if (err)
                res.json(err);
            else
                res.json(results);
        });
    });
});

router.get('/orders', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        dbo.collection('orders').find().toArray(function (err, results) {
            if (err)
                res.json(err);
            else
                res.json(results);
        });
    });
});

router.post('/orders', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);
    
        // console.log(req.body)
        dbo.collection('orders').insert(req.body, function (err, res) {
            if (err) throw err;
            console.log("Order inserted");
            return res;
        })
    
        db.close();
    });
});

router.patch('/orders/:id', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);
    
        // console.log(req.body)
        var ObjectId = require('mongodb').ObjectId; 
        var o_id = new ObjectId(req.params.id);

        dbo.collection('orders').updateOne(
            { "_id" : o_id },
            { $set: { "delivered" : req.body.option } }
        ).then(updatedDocument => {
            if(updatedDocument) {
              console.log(`Successfully updated document: ${updatedDocument}.`)
            } else {
              console.log("No document matches the provided query.")
            }
            return updatedDocument
        }).catch(err => console.error(`Failed to find and update document: ${err}`))
          
        db.close();
    });
});

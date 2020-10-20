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
const database = "loja";

router.get('/products', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        dbo.collection('products').find().toArray(function (err, results) {
            if (err)
                res.json(err);
            else
                res.json(results);
        });
    });
})

router.get('/notes', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        dbo.collection('notes').find().toArray(function (err, results) {
            if (err)
                res.json(err);
            else
                res.json(results);
        });
    });
})

router.post('/notes', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);
    
        // console.log(req.body)
        dbo.collection('notes').insert(req.body, function (err, res) {
            if (err) throw err;
            console.log("Note inserted");
        })
    
        db.close();
    });
})
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var types = [];

const database = "menu";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    dbo.createCollection('orders', function (err, res) {
        if (err) throw err;
        console.log("Collection Orders created!");
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    var myobj = [
        {
            name: 'Sobremesas',
        },
        {
            name: 'Bebidas Geladas',
        },
        {
            name: 'Refeição Delivery',
        },
    ];

    dbo.collection('types').insert(myobj, function (err, res) {
        if (err) throw err;
        console.log("Collection Types created!");
        db.close();
        insertProducts(res.ops);
    });
    
});

function insertProducts(types){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        var myobj
    
        types.map((t) => {
            if(t.name == 'Sobremesas'){
                // console.log('S', t._id)
                myobj = [
                            {
                                name: "Bolo Trovão",
                                description: "Um dos bolos mais vendidos e amados da A Quituteira. Bolo de chocolate amargo, molhado com calda de cereja, recheado e coberto com brigadeiro ao leite, confeitado com granulado belga Callebaut e cerejas.",
                                value: 12,
                                options: [],
                                types_id: t._id,
                                img: '../../../assets/images/bolo_trovao.jpg'
                            },
                            {
                                name: "Torta de Nozes",
                                description: "Bolo amanteigado com nozes, recheio e cobertura de brigadeiro de nozes, confeito de nozes trituradas e chantilly.",
                                value: 13,
                                options: [],
                                types_id: t._id,
                                img: '../../../assets/images/torta_nozes.png'
                            },
                            {
                                name: "Mini Churros de Doce de Leite",
                                description: "Porção 8 unidades. Fritamos na hora!.",
                                value: 6,
                                options: [],
                                types_id: t._id,
                                img: '../../../assets/images/mini_churros.jpg'
                            },
                            {
                                name: "Bolo de Iorgute com Banana",
                                description: "Fatia de bolo de iorgute com banana.",
                                value: 3.5,
                                options: [],
                                types_id: t._id,
                                img: '../../../assets/images/bolo_iorgute.jpg'
                            },
                            {
                                name: "Bolo de Nozes com cobertura",
                                description: "Fatia de bolo de nozes com cobertura de brigadeiro de nozes cremoso.",
                                value: 3.5,
                                options: [],
                                types_id: t._id,
                                img: '../../../assets/images/bolo_nozes_cobertura.jpg'
                            },
                            {
                                name: "Bolo de Limão",
                                description: "Fatia de bolo de limão.",
                                value: 3.5,
                                options: [],
                                types_id: t._id,
                                img: '../../../assets/images/bolo_limao.jpg'
                            }
                        ];
            }
            else{
                if(t.name == 'Bebidas Geladas'){
                // console.log('B', t._id)
                    myobj = [
                                    {
                                        name: "Água Mineral",
                                        description: "500ml.",
                                        value: 3.5,
                                        options: [
                                            {
                                                title: 'Escolha 1 opção',
                                                sub: '',
                                                options:  [
                                                    {
                                                        name: 'Com Gás',
                                                        value: 3.5
                                                    },
                                                    {
                                                        name: 'Sem Gás',
                                                        value: 3.5
                                                    }
                                                ],
                                            }
                                        ],
                                        types_id: t._id,
                                        img: '../../../assets/images/agua_mineral.jpg'
                                    },
                                    {
                                        name: "Água de Coco",
                                        description: "200ml.",
                                        value: 3.5,
                                        options: [],
                                        types_id: t._id,
                                        img: '../../../assets/images/agua_côco.jpg'
                                    },
                                    {
                                        name: "Água Tônica",
                                        description: "A partir de R$ 4,80.",
                                        value: 3.5,
                                        options: [
                                            {
                                                title: 'Escolha 1 opção',
                                                sub: '',
                                                options: [
                                                    {
                                                        name: 'Tônica Antárctica',
                                                        value: 4.8 
                                                    },
                                                    {
                                                        name: 'Tônica Rosé Orgânica Wewi',
                                                        value: 7.5
                                                    }
                                                ],
                                            }
                                        ],
                                        types_id: t._id,
                                        img: '../../../assets/images/agua_tonica.webp'
                                    },
                                    {
                                        name: "Coca Cola",
                                        description: "A partir de R$ 2,80.",
                                        value: 3.5,
                                        options: [
                                            {
                                                title: 'Escolha 1 opção',
                                                sub: '',
                                                options: [
                                                    {
                                                        name: 'Latinha 220ml',
                                                        value: 3.5 
                                                    },
                                                    {
                                                        name: 'Zero Latinha 220ml',
                                                        value: 3.5
                                                    },
                                                    {
                                                        name: 'Zero Garrafinha 200ml',
                                                        value: 2.8
                                                    },
                                                    {
                                                        name: 'Lata 350ml',
                                                        value: 4.5 
                                                    },
                                                    {
                                                        name: 'Garrafa 600ml',
                                                        value: 6
                                                    }
                                                ],
                                            }
                                        ],
                                        types_id: t._id,
                                        img: '../../../assets/images/coca_cola.jpg'
                                    },
                                    {
                                        name: "Fanta",
                                        description: "",
                                        value: 4.5,
                                        options: [],
                                        types_id: t._id,
                                        img: '../../../assets/images/fanta.jpg'
                                    },
                                    {
                                        name: "Chás Gelados",
                                        description: "",
                                        value: 7.5,
                                        options: [
                                            {
                                                title: 'Escolha 1 opção',
                                                sub: '',
                                                options: [
                                                    {
                                                        name: 'Mate Orgânico Gaseificado Wewi',
                                                        value: 7.5
                                                    },
                                                    {
                                                        name: 'Mate Gaseificado Baer-Mate',
                                                        value: 7.75
                                                    },
                                                    {
                                                        name: 'Matcha Gaseificado Baer-Mate',
                                                        value: 9.6
                                                    },
                                                ],
                                            }
                                        ],
                                        types_id: t._id,
                                        img: '../../../assets/images/cha.png'
                                    },
                                    {
                                        name: "Refrigerantes - 2 litros",
                                        description: "",
                                        value: 9,
                                        options: [
                                            {
                                                title: 'Escolha 1 opção',
                                                sub: '',
                                                options: [
                                                    {
                                                        name: 'Coca-Cola',
                                                        value: 9
                                                    },
                                                    {
                                                        name: 'Guaraná',
                                                        value: 9
                                                    }
                                                ],
                                            }
                                        ],
                                        types_id: t._id,
                                        img: '../../../assets/images/refrigerante.jpg'
                                    },
                                    {
                                        name: "Cerveja Heineken",
                                        description: "Long neck",
                                        value: 8,
                                        options: [],
                                        types_id: t._id,
                                        img: '../../../assets/images/heiniken.jpg'
                                    },
                                    {
                                        name: "Espumante Chandon Baby Demi Sec",
                                        description: "187ml",
                                        value: 47.3,
                                        options: [],
                                        types_id: t._id,
                                        img: '../../../assets/images/espumante.jpg'
                                    },
                            ];
                }
                else{
                    // console.log('R', t._id)
                    myobj = [
                                {
                                    name: "REFEIÇÃO DELIVERY 450 GRAMAS SÁBADO (80 gramas de carne)",
                                    description: "AOS SÁBADOS TEMOS A OPÇÃO DE ADICIONAR UMA CARNE ESPECIAL À REFEIÇÃO, COM UM PEQUENO ACRÉSCIMO NO VALOR, CONSULTE ABAIXO. ESCOLHA PELO MENOS 1 ITEM DE CADA CATEGORIA PARA COMPOR A SUA REFEIÇÃO :-).",
                                    value: 25,
                                    options: [
                                        {
                                            title: 'Arroz e Feijão',
                                            sub: 'Escolha de 1 até 2 opções',
                                            options: [
                                                {
                                                    name: 'Arroz Branco',
                                                    value: 0
                                                },
                                                {
                                                    name: 'Arroz 7 Grãos',
                                                    value: 0
                                                },
                                                {
                                                    name: 'Feijão Carioca',
                                                    value: 0
                                                }
                                            ],
                                        },
                                        {
                                            title: 'Carnes',
                                            sub: 'Escolha 1 opção',
                                            options: [
                                                {
                                                    name: 'Filé de trutas com amêndoas',
                                                    value: 0
                                                },
                                                {
                                                    name: 'Picanha suína assada ao vinho branco com champignon',
                                                    value: 0
                                                },
                                                {
                                                    name: 'Filé mignon ao gorgonzola',
                                                    value: 3.5
                                                },
                                                {
                                                    name: 'Não desejo carne',
                                                    value: 0
                                                }
                                            ],
                                        },
                                        {
                                            title: 'Acompanhamentos',
                                            sub: 'Escolha de 1 até 4 opções',
                                            options: [
                                                {
                                                    name: 'RONDELLI DE QUEIJO COM MANJERICÃO AO MOLHO DE TOMATE CONCASSÉ',
                                                    value: 0
                                                },
                                                {
                                                    name: 'ARROZ CREMOSO COM PEITO DE PERU E ALHO PORÓ GRATINADO',
                                                    value: 0
                                                },
                                                {
                                                    name: 'FAROFA DE CASTANHAS COM ZEST DE LIMÃO',
                                                    value: 0
                                                },
                                                {
                                                    name: 'LEGUMES GRELHADOS COM ALHO E SEMENTES DE ABÓBORA TORRADA',
                                                    value: 0
                                                },
                                                {
                                                    name: 'QUICHE DE PROVOLONE COM DAMASCOS E NOZES',
                                                    value: 0
                                                }
                                            ],
                                        },
                                    ],
                                    types_id: t._id,
                                    img: '../../../assets/images/refeicao.jpg'
                                }
                                ];
        
                }
            }
        
            dbo.collection('products').insert(myobj, function (error, res) {
                if (error) throw error;
                console.log("products inserted");
            });
        });
    
        db.close();
    });
}
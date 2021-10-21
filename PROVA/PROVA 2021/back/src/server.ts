import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Aeroporto } from '../model/Aeroporto.model';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.pluralize(null)
mongoose.connect('mongodb://localhost:27017/prova')
    .then(() => console.log('Conexão com o banco de dados efetuada com sucesso!'))
    .catch((err) => console.log('Erro de conexão: ', err))


app.post('/create', async (req, resp) => {
    const { city, aeroport } = req.body;
    const aeroporto: string = aeroport;
    const cidade: string = city;
    const aeroportCreate = new Aeroporto({ aeroporto, cidade });

    try {
        const newAeroport = await Aeroporto.create(aeroportCreate);
        return resp.json(newAeroport);
    } catch (error) {
        console.log('Error ', error)
    }
})

app.get('/all', async (req, res) => {
    const allAeroports = await Aeroporto.find();
    return res.json(allAeroports);
});

app.delete('/delete', async (req, res) => {
    const { id } = req.body;
    const response = await Aeroporto.findByIdAndDelete(id);

    if (response) return res.json({ message: 'Aeroporto excluído com sucesso!' });
    else return res.json({ message: 'Aeroporto não existe' });
})

app.post('/weather', async (req, res) => {
    const { aeroporto } = req.body
    const city = await Aeroporto.findOne({ aeroporto });
    if (city) {

        const response = await axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city.cidade}&appid=6f1d11f7a90845cfc76d1248d417ca6e`,

        });
        return res.json(response.data)
    }
    return res.json({ message: 'Aeroporto inexistente' })
})

app.listen(4000, async () => {
    const aeroports = [
        { aeroporto: 'Cumbica', cidade: 'Guarulhos' },
        { aeroporto: 'Santos Dumont', cidade: 'Rio de Janeiro' },
        { aeroporto: 'Salgado Filho', cidade: 'Porto Alegre' },
        { aeroporto: 'Pampulha', cidade: 'Belo Horizonte' }
    ]

    await Aeroporto.deleteMany({});
    for (const iterator of aeroports) {
        await Aeroporto.create(iterator);
    }
    console.log('Server is running 4000')
});
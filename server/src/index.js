import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!!!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
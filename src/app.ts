import express,{ Application, Request, Response} from  'express';

const app: Application = express();
const port: number = 3000;

app.get('/', (req: Request,res: Response)=>{
    res.send('Olá Mundo Espacial');
 
});

app.listen(port, ()=>{
    console.log(`Fomos conectados com sucesso a nave mae Devs ${port}`)
});
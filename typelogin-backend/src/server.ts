import { createConnection, Connection } from "mysql2";
import dotenv from 'dotenv';
import app from './index';

dotenv.config()

const port = 5000

export const conexao: Connection = createConnection({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
});

conexao.connect((error) => {
    if(error){
        console.log("Erro ao conectar no banco de dados", error)
    }
    app.listen(port, () => {
        console.log(`Servidor esta funcionando na porta ${port}`)
    })
})
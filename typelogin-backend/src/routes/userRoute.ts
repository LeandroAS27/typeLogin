import express, { Router, Request, Response} from "express";
import { conexao } from '../server';
const router = express.Router();

interface UserBody{
    name: string;
    email: string;
    password: string;
}

router.post('/users', (req: Request, res: Response) => {
    const {name, email, password}:UserBody = req.body

    console.log(req.body)

    const sql = "INSERT INTO bdlogin.users (name, email, password) VALUES (?, ?, ?);"

    const values = [name, email, password]

    conexao.query(sql, values, (error, result) => {
        if(error){
            res.status(500).json({message: "Erro no servidor", error})
        }
        res.status(200).json({message: 'Sucesso na requisicao', result})
    })
})

router.get('/users', (req: Request, res: Response) => {
    const sql = "SELECT * FROM bdlogin.users"

    conexao.query(sql, (error, result) => {
        if(error){
            res.status(500).json({message: "Erro no servidor", error})
        }
        res.status(200).json({message: 'Sucesso na requisicao', result})
    })
})

export default router;
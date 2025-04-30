import express, {Express} from 'express'
import userRoute from './routes/userRoute'
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Funcionando')
})

app.use(userRoute)

export default app


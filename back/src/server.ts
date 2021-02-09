/**
 * Server.TS
 * Inicializador do servidor do backend. Nele são passados alguns configurações de dependências, rotas e a porta onde o servidor será iniciado.
 */

import 'reflect-metadata';
import express, { json } from 'express';
import routes from './routes';
import './database';

const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(8081, function(){
    console.log("✌ Server On ");
})
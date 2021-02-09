/**
 * Cria a conexão com o banco de dados.
 */

import { createConnection } from 'typeorm';
createConnection(); //Procura pelo arquivo ormconfig.json para criar a conexão
/**
 * Rotas do serviço de usuários
 */

import {Router} from 'express';
import { stringify } from 'querystring';

import AuthenticateUser from '../services/AuthenticateUser.service';

const sessionRouter = Router();

sessionRouter.post('/', async function(request, response){

    try{
        const {email, password} = request.body;

        const authenticateUser = new AuthenticateUser();
        const responseUserAuth = await authenticateUser.run({email, password});

        return response.status(200).send('auth');

    }catch(err){
        return response.status(400).json({error: err.message});
    }

})

export default sessionRouter;
/**
 * Rotas do serviço de usuários
 */

import {Router} from 'express';
import {getCustomRepository} from 'typeorm';

import UsersRepository from '../repositories/Users.repository'
import CreateUsersService from '../services/CreateUser.service'

const usersRoutes = Router();

usersRoutes.get('/', async function(request, response){
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();
    response.status(200).json(users);
})

usersRoutes.post('/', async function(request, response){
    try{
        const {name, email, password} = request.body;
        const createUsersService = new CreateUsersService();

        const user = await createUsersService.run({
            name,
            email,
            password
        });

        return response.status(200).json(user);
    }catch(err){
        return response.status(400).json({error: err.message});
    }
})

export default usersRoutes;
/**
 * Arquivos .service constituem uma biblioteca de funções que podem ser reutilizadas por outros arquivos que à importam.
 */

import {getCustomRepository} from 'typeorm';
import { hash } from 'bcryptjs'
import UsersModel from '../models/Users.model';
import UsersRepository from '../repositories/Users.repository';

interface RequestDTO{
    email: string,
    password: string,
    name: string
}

class CreateUserService{

    public async run({email, name, password}: RequestDTO) : Promise<UsersModel>{ // Por padrão, toda a vez que se tem uma função assíncrona, o retorno é uma promise

        const usersRepository = getCustomRepository(UsersRepository);
        const findEqualEmail = await usersRepository.findByEmail(email); // importa o método do repositório

        if(findEqualEmail){
            throw Error("This email already used.");
        }

        const hashedPassword = await hash(password, 8);
    
        const user = usersRepository.create({ // Cria a instância do objeto
            email,
            name,
            password:hashedPassword
        });

        await usersRepository.save(user);

        delete user.password;

        return user;
    }
}

export default CreateUserService;
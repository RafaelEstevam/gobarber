import {getRepository} from 'typeorm';
// import { hash } from 'bcryptjs'

import UsersModel from '../models/Users.model';

interface UserAthenticate{
    email: string,
    password: string
};

class AuthenticateUser{
    public async run({email, password} : UserAthenticate): Promise<void>{
        const userRepository = getRepository(UsersModel);
        const user = await userRepository.findOne({where: {email}});

        if(!user){
            
        }
    }
}

export default AuthenticateUser;
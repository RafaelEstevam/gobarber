/**
 * Arquivos .repository: Lista todas as operações feitas no banco de dados de acordo com o serviço utilizado. Por exemplo, este arquivo lista todas as operações de banco de dados
 * relacionadas ao agendamento (appointments).
 * O Repository importado do typeORM já implementa por padrão, as funções básicas de operação no banco de dados. Find, Save, FindOne... 
 */

import {EntityRepository, Repository} from 'typeorm'
import UsersModel from '../models/Users.model';

@EntityRepository(UsersModel)
class UsersRepository extends Repository<UsersModel> { // parâmetro de uma tipagem    
    public async findByEmail(email: string): Promise<UsersModel | null>{
        const findAppointment = await this.findOne({
            where: {email}
        });
        return findAppointment || null;
    }
}

export default UsersRepository;
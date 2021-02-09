/**
 * Arquivos .repository: Lista todas as operações feitas no banco de dados de acordo com o serviço utilizado. Por exemplo, este arquivo lista todas as operações de banco de dados
 * relacionadas ao agendamento (appointments).
 * O Repository importado do typeORM já implementa por padrão, as funções básicas de operação no banco de dados. Find, Save, FindOne... 
 */

import {EntityRepository, Repository} from 'typeorm'
import AppointmentsModel from '../models/Appointments.model';

@EntityRepository(AppointmentsModel)
class AppointmentsRepository extends Repository<AppointmentsModel> { // parâmetro de uma tipagem    
    public async findByDate(date: Date): Promise<AppointmentsModel | null>{
        const findAppointment = await this.findOne({
            where: {date}
        });
        return findAppointment || null;
    }
}

export default AppointmentsRepository;
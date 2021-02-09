/**
 * Arquivos .service constituem uma biblioteca de funções que podem ser reutilizadas por outros arquivos que à importam.
 */

import {startOfHour} from 'date-fns';
import {getCustomRepository} from 'typeorm';
import AppointmentModel from '../models/Appointments.model';
import AppointmentsRepository from '../repositories/Appointments.repository';

interface RequestDTO{
    date: Date,
    provider_id: string,
    name: string
}

class CreateAppointmentService{

    public async run({date, provider_id, name}: RequestDTO) : Promise<AppointmentModel>{ // Por padrão, toda a vez que se tem uma função assíncrona, o retorno é uma promise

        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const parsedDate = startOfHour(date);
        const findAppointmentInSameDate = await appointmentsRepository.findByDate(parsedDate); // importa o método do repositório appointments

        if(findAppointmentInSameDate){
            throw Error("This appointment is already booked");
        }
    
        const appointment = appointmentsRepository.create({ // Cria a instância do objeto appointment
            provider_id,
            name,
            date: parsedDate
        });

        await appointmentsRepository.save(appointment);
        return appointment;
    }
}

export default CreateAppointmentService;
/**
 * Arquivos .routes: São, basicamente, as rotas de acesso ao backend de acordo com o serviço. Por exemplo, este arquivo lista todas as rotas relacionadas ao serviço de 
 * agendamento (appointments).
 */

import {Router} from 'express'; // Função de rota do express
import {parseISO} from 'date-fns'; // Função de data
import {getCustomRepository} from 'typeorm';

import AppointmentsRepository from '../repositories/Appointments.repository'
import CreateAppointmentsService from '../services/CreateAppointment.service'

const appointmentsRoutes = Router();

appointmentsRoutes.get("/", async function(request, response){
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find(); // Buscar todos os dados
    response.status(200).json(appointments);
})

appointmentsRoutes.post("/", async function(request, response){

    try{
        const {provider_id, date, name} = request.body;
        const newDate = parseISO(date);
        const createAppointmentService =  new CreateAppointmentsService();
        const appointment = await createAppointmentService.run({
            date: newDate,
            provider_id,
            name
        });

        response.status(200).json(appointment);

    }catch(err){
        return response.status(400).json({error: err.message});
    }

})

export default appointmentsRoutes;
import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateappointmentService';

const appointmentRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.all();

  return res.json(appointments);
});

appointmentRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return res.json(appointment);
  } catch (err) {
    return res.status(400).json({ eror: err.message });
  }
});

export default appointmentRouter;

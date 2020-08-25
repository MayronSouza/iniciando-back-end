import { Router } from 'express';

import AppointmentRouter from './appointment.routes';

const routes = Router();

routes.use('/appointments', AppointmentRouter);

export default routes;

/* eslint-disable camelcase */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsControler from '../controllers/AppointmentsController';

const appointmentRouter = Router();
const appointmentsController = new AppointmentsControler();

appointmentRouter.use(ensureAuthenticated);

// appointmentRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsController.();

//   return res.json(appointments);
// });

appointmentRouter.post('/', appointmentsController.create);

export default appointmentRouter;

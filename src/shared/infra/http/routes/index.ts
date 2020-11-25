// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter); //  Toda rota que iniciar com /apointments será repasado para dentro do appointmentsRouter
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
export default routes;

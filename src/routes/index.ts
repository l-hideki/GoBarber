// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter); //  Toda rota que iniciar com /apointments será repasado para dentro do appointmentsRouter

export default routes;

import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

//  POST http://localhost:3333/appointments
sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;

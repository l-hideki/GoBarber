import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

//  POST http://localhost:3333/appointments
profileRouter.use(ensureAuthenticated);
profileRouter.put('/', profileController.update);

export default profileRouter;

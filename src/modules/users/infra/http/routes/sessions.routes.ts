import { Router } from 'express';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UserMapper from '../mappers/UserMapper';

const sessionsRouter = Router();

//  POST http://localhost:3333/appointments
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.execute({ email, password });

  const mappedUser = UserMapper.toDTO(user);

  return response.json({ mappedUser, token });
});

export default sessionsRouter;

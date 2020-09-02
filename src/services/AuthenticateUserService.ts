import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    // user.password - Senha Criptografada
    // password - Senha não criptografada

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const token = sign({}, '8d7f29167c8988729ef8a2e998b3233b', {
      subject: user.id,
      expiresIn: '1d',
    });

    // Usuário Autenticado
    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;

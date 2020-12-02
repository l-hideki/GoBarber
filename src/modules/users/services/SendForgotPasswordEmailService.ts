import { inject, injectable } from 'tsyringe';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
/* import AppError from '@shared/errors/AppErrors';
 */ import IUsersRepository from '../repositories/IUsersRepository';
/* import User from '../infra/typeorm/entities/User';
 */
interface IRequest {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private MailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    this.MailProvider.sendMail(email, 'Que doidera bro');
  }
}

export default SendForgotPasswordEmailService;

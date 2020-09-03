import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import UploadConfig from '../config/upload';
import AppError from '../errors/AppErrors';
import User from '../models/User';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const usersrepository = getRepository(User);

    const user = await usersrepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      // Deletar Avatar Anterior
      const userAvatarFilePath = path.join(UploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    user.avatar = avatarFilename;
    await usersrepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;

import User from '@modules/users/infra/typeorm/entities/User';

export default class UserMapper {
  public static toDTO(user: User): unknown {
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}

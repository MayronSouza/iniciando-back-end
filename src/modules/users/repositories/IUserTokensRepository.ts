import UserTonken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserTonken>;
  findByToken(token: string): Promise<UserTonken | undefined>;
}

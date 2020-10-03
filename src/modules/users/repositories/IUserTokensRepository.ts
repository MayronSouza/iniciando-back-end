import UserTonken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserTonken>;
  findBytoken(token: string): Promise<UserTonken | undefined>;
}

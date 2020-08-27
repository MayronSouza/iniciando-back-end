interface RequestDTO {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: RequestDTO): Promise<void> {}
}

export default AuthenticateUserService;

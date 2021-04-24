import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {

  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    // Verificar se o usuário existe
    const userExists = await this.usersRepository.findOne({ email });

    // Se existir, retornar o usuário
    if (userExists) {
      return userExists;
    }

    // Se não existir, criar/salvar no DB
    const user = this.usersRepository.create({ email });
    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
  
    return user;
  }
}

export { UserService };

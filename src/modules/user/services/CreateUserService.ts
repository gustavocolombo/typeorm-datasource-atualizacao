import { hash } from 'bcryptjs';
import DataSourceTypeorm from '../../shared/infra/typeorm/database/dataSource';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/Users.entity';

export default class CreateUserService {
  public async execute({ name, email, password }: ICreateUserDTO) {
    const userRepository = DataSourceTypeorm.manager.getRepository(User);

    const user = await userRepository.findOneBy({ email });

    if (user) throw new Error('Usuário com endereço de e-mail já cadastrado');

    const hashedPass = await hash(password, 8);

    const newUser = await userRepository.save(userRepository.create({name, email, password: hashedPass}));

    return newUser;
  }
}

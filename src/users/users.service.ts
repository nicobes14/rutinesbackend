import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>({
      include: [{ association: 'rutine' }],
    });
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findByPk<User>(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { username, password, rutineId } = updateUserDto;
    return this.usersRepository.update(
      { username, password, rutineId },
      { where: { id } },
    );
  }

  async remove(id: number): Promise<number> {
    return this.usersRepository.destroy({ where: { id } });
  }
}

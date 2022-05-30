import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>({
      include: [{ association: 'rutine' }],
      attributes: { exclude: ['password'] },
    });
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findByPk<User>(id, {
      attributes: { exclude: ['password'] },
    });
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

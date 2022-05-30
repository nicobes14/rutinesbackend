import { HttpException, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { RegisterAuthDTO } from './dto/register-user.dto';
import { compareSync, hashSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDTO } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    private jwtService: JwtService,
  ) {}
  async registerUser(user: RegisterAuthDTO) {
    const hashPassword = hashSync(user.password, 10);
    const userCreated = await this.usersRepository.create({
      username: user.username,
      password: hashPassword,
    });
    if (userCreated)
      return {
        access_token: this.jwtService.sign({
          username: userCreated.username,
          sub: userCreated.id,
        }),
      };
    throw new HttpException('User not created', 401);
  }
  async loginUser(user: LoginAuthDTO) {
    const userFound = await this.usersRepository.findOne({
      where: { username: user.username },
    });
    if (userFound && compareSync(user.password, userFound.password)) {
      return {
        access_token: this.jwtService.sign({
          username: userFound.username,
          sub: userFound.id,
        }),
      };
    }
    throw new HttpException('Invalid credentials', 401);
  }
}

import { User } from './entities/user.entity';

export const usersProvider = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];

import { Sequelize } from 'sequelize-typescript';
import { Exercise } from 'src/exercise/entities/exercise.entity';
import { Rutine } from 'src/rutine/entities/rutine.entity';
import { User } from '../users/entities/user.entity';
import { RutineExercise } from './relations/rutineexercise';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'nestjs',
        sync: { force: true },
      });
      sequelize.addModels([User, Rutine, Exercise, RutineExercise]);
      return sequelize;
    },
  },
];

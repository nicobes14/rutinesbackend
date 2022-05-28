import { Exercise } from './../../exercise/entities/exercise.entity';
import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import { RutineExercise } from 'src/database/relations/rutineexercise';

@Table
export class Rutine extends Model {
  @Column
  name: string;

  @HasMany(() => User)
  users: User[];

  @BelongsToMany(() => Exercise, () => RutineExercise)
  exercises: Exercise[];
}

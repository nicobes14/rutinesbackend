import { Exercise } from './../../exercise/entities/exercise.entity';
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import { RutineExercise } from 'src/database/relations/rutineexercise';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Rutine extends Model {
  @ForeignKey(() => User)
  @Column({
    references: { model: 'users', key: 'id' },
    allowNull: false,
    type: DataType.INTEGER,
  })
  creatorId: number;

  @Column({ allowNull: false, type: DataType.STRING, unique: true })
  @ApiProperty({
    example: 'Rutina de ejercicios',
    description: 'name of the rutine',
  })
  name: string;

  @HasMany(() => User)
  users: User[];

  @BelongsToMany(() => Exercise, () => RutineExercise)
  exercises: Exercise[];
}

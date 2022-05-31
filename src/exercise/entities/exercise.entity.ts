import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { RutineExercise } from 'src/database/relations/rutineexercise';
import { Rutine } from 'src/rutine/entities/rutine.entity';
import { User } from 'src/users/entities/user.entity';

@Table
export class Exercise extends Model {
  @ForeignKey(() => User)
  @Column({
    references: { model: 'users', key: 'id' },
    allowNull: false,
    type: DataType.INTEGER,
  })
  creatorId: number;

  @Column({ allowNull: false, type: DataType.STRING, unique: true })
  name: string;
  @Column({ allowNull: false, type: DataType.STRING })
  type: string;

  @BelongsToMany(() => Rutine, () => RutineExercise)
  rutines: Rutine[];
}

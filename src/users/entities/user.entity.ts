import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Rutine } from 'src/rutine/entities/rutine.entity';

@Table
export class User extends Model {
  @Column({ allowNull: false, unique: true, type: DataType.STRING })
  username: string;

  @Column({ allowNull: false, type: DataType.STRING })
  password: string;

  @Column({ allowNull: false, type: DataType.STRING })
  role: string;

  @ForeignKey(() => Rutine)
  @Column({
    references: { model: 'rutines', key: 'id' },
    allowNull: true,
    type: DataType.INTEGER,
  })
  rutineId: number;

  @BelongsTo(() => Rutine)
  rutine: Rutine;
}

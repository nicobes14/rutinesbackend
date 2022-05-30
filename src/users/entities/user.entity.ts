import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Rutine } from 'src/rutine/entities/rutine.entity';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @ForeignKey(() => Rutine)
  @Column
  rutineId: number;

  @BelongsTo(() => Rutine)
  rutine: Rutine;
}

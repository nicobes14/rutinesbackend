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
  @ApiProperty({ example: 'theking', description: 'The username' })
  @Column
  username: string;

  @ApiProperty({ example: 'Thepassword123', description: 'The password' })
  @Column
  password: string;

  @ApiProperty({ example: 1, description: 'The current rutine id' })
  @ForeignKey(() => Rutine)
  @Column
  rutineId: number;

  @BelongsTo(() => Rutine)
  rutine: Rutine;
}

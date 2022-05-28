import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { RutineExercise } from 'src/database/relations/rutineexercise';
import { Rutine } from 'src/rutine/entities/rutine.entity';

@Table
export class Exercise extends Model {
  @Column
  name: string;
  @Column
  type: string;

  @BelongsToMany(() => Rutine, () => RutineExercise)
  rutines: Rutine[];
}

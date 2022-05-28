import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Exercise } from 'src/exercise/entities/exercise.entity';
import { Rutine } from 'src/rutine/entities/rutine.entity';

@Table
export class RutineExercise extends Model {
  @ForeignKey(() => Rutine)
  @Column
  rutineId: number;

  @ForeignKey(() => Exercise)
  @Column
  exerciseId: number;
}

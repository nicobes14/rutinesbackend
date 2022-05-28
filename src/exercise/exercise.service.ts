import { Inject, Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject('EXERCISES_REPOSITORY')
    private exercisesProvider: typeof Exercise,
  ) {}
  create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const { name, type } = createExerciseDto;
    return this.exercisesProvider.create({ name, type });
  }

  findAll(): Promise<Exercise[]> {
    return this.exercisesProvider.findAll<Exercise>();
  }

  findOne(id: number): Promise<Exercise> {
    return this.exercisesProvider.findByPk<Exercise>(id);
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    const { name, type } = updateExerciseDto;
    return this.exercisesProvider.update({ name, type }, { where: { id } });
  }

  remove(id: number): Promise<number> {
    return this.exercisesProvider.destroy({ where: { id } });
  }
}

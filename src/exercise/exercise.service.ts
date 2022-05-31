import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject('EXERCISES_REPOSITORY')
    private exercisesProvider: typeof Exercise,
    private jwtService: JwtService,
  ) {}

  async create(
    createExerciseDto: CreateExerciseDto,
    auth: string,
  ): Promise<Exercise> {
    const creatorId = this.jwtService.decode(auth.split(' ')[1]).sub;
    const { name, type } = createExerciseDto;
    const [exerciseCreated, created] =
      await this.exercisesProvider.findOrCreate({
        where: { name },
        defaults: { name, type, creatorId },
      });
    if (created) {
      return exerciseCreated;
    } else {
      return undefined;
    }
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

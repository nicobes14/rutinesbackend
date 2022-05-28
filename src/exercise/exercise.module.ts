import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { DatabaseModule } from 'src/database/database.module';
import { exercisesProvider } from './exercise.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ExerciseController],
  providers: [ExerciseService, ...exercisesProvider],
})
export class ExerciseModule {}

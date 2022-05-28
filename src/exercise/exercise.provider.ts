import { Exercise } from 'src/exercise/entities/exercise.entity';

export const exercisesProvider = [
  {
    provide: 'EXERCISES_REPOSITORY',
    useValue: Exercise,
  },
];

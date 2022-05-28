import { Rutine } from './entities/rutine.entity';

export const rutinesProvider = [
  {
    provide: 'RUTINES_REPOSITORY',
    useValue: Rutine,
  },
];

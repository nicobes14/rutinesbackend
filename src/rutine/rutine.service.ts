import { Inject, Injectable } from '@nestjs/common';
import { CreateRutineDto } from './dto/create-rutine.dto';
import { UpdateRutineDto } from './dto/update-rutine.dto';
import { Rutine } from './entities/rutine.entity';

@Injectable()
export class RutineService {
  constructor(
    @Inject('RUTINES_REPOSITORY')
    private rutinesRepository: typeof Rutine,
  ) {}
  async create(createRutineDto: CreateRutineDto): Promise<Rutine> {
    const { name, exercisesIds } = createRutineDto;
    const rutineCreated = this.rutinesRepository.create({ name });
    await (await rutineCreated).$set('exercises', exercisesIds);
    return rutineCreated;
  }

  async findAll(): Promise<Rutine[]> {
    return this.rutinesRepository.findAll<Rutine>({
      include: [{ association: 'exercises' }],
    });
  }

  async findOne(id: number): Promise<Rutine> {
    return this.rutinesRepository.findByPk<Rutine>(id);
  }

  async update(id: number, updateRutineDto: UpdateRutineDto) {
    const { name } = updateRutineDto;
    return this.rutinesRepository.update({ name }, { where: { id } });
  }

  async remove(id: number): Promise<number> {
    return this.rutinesRepository.destroy({ where: { id } });
  }
}

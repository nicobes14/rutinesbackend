import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateRutineDto } from './dto/create-rutine.dto';
import { UpdateRutineDto } from './dto/update-rutine.dto';
import { Rutine } from './entities/rutine.entity';

@Injectable()
export class RutineService {
  constructor(
    @Inject('RUTINES_REPOSITORY')
    private rutinesRepository: typeof Rutine,
    private jwtService: JwtService,
  ) {}

  async create(
    createRutineDto: CreateRutineDto,
    auth: string,
  ): Promise<Rutine> {
    const creatorId = this.jwtService.decode(auth.split(' ')[1]).sub;
    const { name, exercisesIds } = createRutineDto;
    const [rutineCreated, created] = await this.rutinesRepository.findOrCreate({
      where: { name },
      defaults: { name, creatorId },
    });
    if (created) {
      exercisesIds
        ? await (await rutineCreated).$set('exercises', exercisesIds)
        : null;
      return rutineCreated;
    } else {
      return undefined;
    }
  }

  async findAll(): Promise<Rutine[]> {
    return this.rutinesRepository.findAll<Rutine>({
      include: [
        {
          association: 'exercises',
          attributes: ['id', 'name'],
        },
      ],
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

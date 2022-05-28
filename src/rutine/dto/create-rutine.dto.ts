import { ApiProperty } from '@nestjs/swagger';
export class CreateRutineDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  exercisesIds: number[];
}

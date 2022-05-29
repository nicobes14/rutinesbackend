import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateRutineDto } from './create-rutine.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRutineDto extends PartialType(CreateRutineDto) {
  @ApiProperty({
    example: 'Rutina de ejercicios',
    description: 'name of the rutine',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ example: [1, 2, 33], description: 'exercises of the rutine' })
  @IsNumber({}, { each: true })
  exercisesIds: number[];
}

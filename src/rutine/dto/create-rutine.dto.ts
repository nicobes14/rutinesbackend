import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CreateRutineDto {
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

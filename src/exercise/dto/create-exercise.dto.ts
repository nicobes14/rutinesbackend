import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateExerciseDto {
  @ApiProperty({
    example: 'Pullover',
    description: 'name of the exercise',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Tricep', description: 'the type of the exercise' })
  @IsString()
  @IsNotEmpty()
  type: string;
}

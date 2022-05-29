import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsString()
  username: string;
  @ApiProperty()
  @MinLength(8)
  password: string;
  @ApiProperty()
  @IsNumber()
  rutineId: number;
}

import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { RegisterAuthDTO } from 'src/auth/dto/register-user.dto';

export class UpdateUserDto extends PartialType(RegisterAuthDTO) {
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

import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { RegisterAuthDTO } from 'src/auth/dto/register-user.dto';

export class UpdateUserDto extends PartialType(RegisterAuthDTO) {
  @ApiProperty({ example: 'theking', description: 'The username' })
  @IsString()
  username: string;
  @ApiProperty({ example: 'Thepassword123', description: 'The password' })
  @MinLength(8)
  password: string;
  @ApiProperty({ example: 1, description: 'The current rutine id' })
  @IsNumber()
  rutineId: number;
}

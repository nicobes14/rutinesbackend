import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class RegisterAuthDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(4)
  @MaxLength(12)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(12)
  password: string;
}

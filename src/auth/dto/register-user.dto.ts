import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class RegisterAuthDTO {
  @ApiProperty({ example: 'theking', description: 'The username' })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(12)
  username: string;

  @ApiProperty({ example: 'Thepassword123', description: 'The password' })
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(100)
  password: string;
}

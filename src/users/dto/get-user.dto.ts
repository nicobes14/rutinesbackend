import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'theking' })
  username: string;
  @ApiProperty({ example: 1 })
  rutineId: number;
}

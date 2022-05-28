import { PartialType } from '@nestjs/swagger';
import { CreateRutineDto } from './create-rutine.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRutineDto extends PartialType(CreateRutineDto) {
  @ApiProperty()
  name: string;
}

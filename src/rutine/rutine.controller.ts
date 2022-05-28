import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RutineService } from './rutine.service';
import { CreateRutineDto } from './dto/create-rutine.dto';
import { UpdateRutineDto } from './dto/update-rutine.dto';

@Controller('rutines')
export class RutineController {
  constructor(private readonly rutineService: RutineService) {}

  @Post()
  create(@Body() createRutineDto: CreateRutineDto) {
    return this.rutineService.create(createRutineDto);
  }

  @Get()
  findAll() {
    return this.rutineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rutineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRutineDto: UpdateRutineDto) {
    return this.rutineService.update(+id, updateRutineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutineService.remove(+id);
  }
}

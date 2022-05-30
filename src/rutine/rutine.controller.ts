import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RutineService } from './rutine.service';
import { CreateRutineDto } from './dto/create-rutine.dto';
import { UpdateRutineDto } from './dto/update-rutine.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('rutines')
@Controller('rutines')
export class RutineController {
  constructor(private readonly rutineService: RutineService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a rutine' })
  @ApiResponse({ status: 201, description: 'Rutine created' })
  create(@Body() createRutineDto: CreateRutineDto) {
    return this.rutineService.create(createRutineDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all rutines' })
  @ApiResponse({ status: 200, description: 'Rutines found' })
  @ApiResponse({ status: 404, description: 'Rutines not found' })
  findAll() {
    return this.rutineService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get rutine by id' })
  @ApiResponse({ status: 200, description: 'Rutine found' })
  @ApiResponse({ status: 404, description: 'Rutine not found' })
  findOne(@Param('id') id: string) {
    return this.rutineService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update rutine by id' })
  @ApiResponse({ status: 200, description: 'Rutine updated' })
  @ApiResponse({ status: 404, description: 'Rutine not found' })
  update(@Param('id') id: string, @Body() updateRutineDto: UpdateRutineDto) {
    return this.rutineService.update(+id, updateRutineDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete rutine by id' })
  @ApiResponse({ status: 200, description: 'Rutine deleted' })
  @ApiResponse({ status: 404, description: 'Rutine not found' })
  remove(@Param('id') id: string) {
    return this.rutineService.remove(+id);
  }
}

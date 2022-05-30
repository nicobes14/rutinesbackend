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
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RutineService } from './rutine.service';
import { CreateRutineDto } from './dto/create-rutine.dto';
import { UpdateRutineDto } from './dto/update-rutine.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/roles.enum';

@ApiBearerAuth()
@ApiTags('rutines')
@Controller('rutines')
export class RutineController {
  constructor(private readonly rutineService: RutineService) {}
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  @Post()
  @ApiOperation({ summary: 'Create a rutine' })
  @ApiResponse({ status: 201, description: 'Rutine created' })
  async create(@Body() createRutineDto: CreateRutineDto, @Req() request: any) {
    const { authorization } = request.headers;
    const result = await this.rutineService.create(
      createRutineDto,
      authorization,
    );
    if (!result)
      throw new HttpException('Rutine already exists', HttpStatus.BAD_REQUEST);
    return result;
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

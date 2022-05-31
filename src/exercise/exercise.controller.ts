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
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Role } from 'src/auth/roles/roles.enum';
import { Roles } from 'src/auth/roles/roles.decorator';

@ApiBearerAuth()
@ApiTags('exercises')
@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  @Post()
  @ApiOperation({ summary: 'Create a exercise' })
  @ApiResponse({ status: 201, description: 'Exercise created' })
  @ApiResponse({ status: 400, description: 'Exercise already exists' })
  async create(
    @Body() createExerciseDto: CreateExerciseDto,
    @Req() request: any,
  ) {
    const { authorization } = request.headers;
    const result = await this.exerciseService.create(
      createExerciseDto,
      authorization,
    );
    if (!result)
      throw new HttpException(
        'Exercise already exists',
        HttpStatus.BAD_REQUEST,
      );
    return result;
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  @ApiOperation({ summary: 'Get exercises' })
  @ApiResponse({ status: 200, description: 'Exercise found' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @Get()
  async findAll() {
    return this.exerciseService.findAll();
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  @ApiOperation({ summary: 'Get exercise by id' })
  @ApiResponse({ status: 200, description: 'Exercise found' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.exerciseService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  @ApiOperation({ summary: 'Update exercise by id' })
  @ApiResponse({ status: 200, description: 'Exercise updated' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.exerciseService.update(+id, updateExerciseDto);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  @ApiOperation({ summary: 'Delete exercise by id' })
  @ApiResponse({ status: 200, description: 'Exercise deleted' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.exerciseService.remove(+id);
  }
}

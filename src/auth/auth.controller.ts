import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDTO } from './dto/register-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  @ApiOperation({ summary: 'Register into app' })
  @ApiResponse({ status: 201, description: 'User created' })
  async registerUser(@Body() userObject: RegisterAuthDTO) {
    return await this.authService.registerUser(userObject);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login into app' })
  @ApiResponse({ status: 201, description: 'User logged' })
  async loginUser(@Body() userObject: RegisterAuthDTO) {
    return await this.authService.loginUser(userObject);
  }
}

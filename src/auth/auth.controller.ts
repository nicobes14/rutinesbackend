import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDTO } from './dto/register-user.dto';
import { JWTResponse } from './dto/jwt-response.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  @ApiOperation({ summary: 'Register into app' })
  @ApiResponse({
    status: 201,
    description: 'User created',
    type: JWTResponse,
  })
  async registerUser(@Body() userObject: RegisterAuthDTO) {
    return await this.authService.registerUser(userObject);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login into app' })
  @ApiResponse({ status: 201, description: 'User logged', type: JWTResponse })
  async loginUser(@Body() userObject: RegisterAuthDTO) {
    return await this.authService.loginUser(userObject);
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Refresh token' })
  @ApiResponse({
    status: 201,
    description: 'Token refreshed',
    type: JWTResponse,
  })
  async refreshToken(@Body() userObject: RegisterAuthDTO) {
    return await this.authService.refreshToken(userObject);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout' })
  @ApiResponse({ status: 201, description: 'User logged out' })
  async logoutUser(@Body() userObject: RegisterAuthDTO) {
    return await this.authService.logoutUser(userObject);
  }
}

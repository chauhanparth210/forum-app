import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDTO } from './dto/user-register.dto';
import { UserResponseDTO } from './dto/user-response.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({ type: UserResponseDTO })
  @Post('register')
  async register(
    @Body() userRegisterDTO: UserRegisterDTO,
  ): Promise<UserResponseDTO> {
    return this.userService.createUser(userRegisterDTO);
  }

  @ApiCreatedResponse({ type: UserResponseDTO })
  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<UserResponseDTO> {
    return this.userService.login(loginDTO);
  }

  @ApiCreatedResponse({ type: UserResponseDTO })
  @ApiBearerAuth('jwt-token')
  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Req() req): Promise<UserResponseDTO | null> {
    const userId: string = req.id;
    return this.userService.getUserInfo(userId);
  }
}

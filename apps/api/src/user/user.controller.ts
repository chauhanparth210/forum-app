import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDTO } from './dto/user-register.dto';
import { UserResponseDTO } from './dto/user-response.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';

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
}

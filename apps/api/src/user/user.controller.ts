import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDTO } from './dto/user-register.dto';
import { UserResponseDTO } from './dto/user-response.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

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
}

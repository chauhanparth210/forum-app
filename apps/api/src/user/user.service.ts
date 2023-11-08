import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserRegisterDTO } from './dto/user-register.dto';
import { UserResponseDTO } from './dto/user-response.dto';
import {
  EMAIL_TAKEN,
  INCORRECT_PASSWORD,
  USERNAME_TAKEN,
  USER_NOT_FOUND,
} from 'utils/constant';
import { JWTConfig } from 'config/jwt.config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser({
    username,
    email,
    password,
  }: UserRegisterDTO): Promise<UserResponseDTO> {
    const isUserExist = await Promise.all([
      this.userRepository.findOne({ where: { username } }),
      this.userRepository.findOne({ where: { email } }),
    ]);

    if (isUserExist[0]) {
      throw new BadRequestException([USERNAME_TAKEN]);
    }

    if (isUserExist[1]) {
      throw new BadRequestException([EMAIL_TAKEN]);
    }

    const hashPassword = await argon2.hash(password);

    const user = await this.userRepository.save({
      username,
      email,
      password: hashPassword,
    });

    const jwtToken = jwt.sign(
      {
        userId: user.id,
      },
      JWTConfig.SECRET,
      { expiresIn: JWTConfig.EXPIRY_TIME },
    );

    return {
      username: user.username,
      email: user.email,
      userId: user.id,
      jwt: jwtToken,
    };
  }

  async login({ username, email, password }): Promise<UserResponseDTO> {
    const user = await this.userRepository.findOne({
      where: { ...(email ? { email } : { username }) },
    });

    if (!user) {
      throw new UnauthorizedException([USER_NOT_FOUND]);
    }

    const isPasswordMatch = await argon2.verify(user.password, password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException([INCORRECT_PASSWORD]);
    }

    const jwtToken = jwt.sign(
      {
        userId: user.id,
      },
      JWTConfig.SECRET,
      { expiresIn: JWTConfig.EXPIRY_TIME },
    );
    return {
      username: user.username,
      email: user.email,
      userId: user.id,
      jwt: jwtToken,
    };
  }
}

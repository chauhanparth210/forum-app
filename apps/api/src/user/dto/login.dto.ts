import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, ValidateIf } from 'class-validator';

export class LoginDTO {
  @ApiProperty()
  @ValidateIf((o) => o.email === undefined)
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @ValidateIf((o) => o.username === undefined)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}

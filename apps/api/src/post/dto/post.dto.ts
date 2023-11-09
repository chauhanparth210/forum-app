import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class PostDTO {
  @ApiProperty()
  @IsNotEmpty()
  text: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isAnonymous: string;
}

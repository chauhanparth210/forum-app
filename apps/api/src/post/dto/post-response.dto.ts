import { ApiProperty } from '@nestjs/swagger';

export class PostResponseDTO {
  @ApiProperty()
  message: string;
}

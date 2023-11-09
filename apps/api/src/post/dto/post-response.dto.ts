import { ApiProperty } from '@nestjs/swagger';

export class PostResponseDTO {
  @ApiProperty()
  text: string;

  @ApiProperty()
  isAnonymous?: boolean;

  @ApiProperty()
  id: string;

  @ApiProperty()
  user?: object | null;
}

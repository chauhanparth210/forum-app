import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDTO {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  jwt: string;
}

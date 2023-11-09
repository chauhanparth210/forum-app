import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PostDTO } from './dto/post.dto';
import { PostResponseDTO } from './dto/post-response.dto';
import { AuthGuard } from 'src/user/guard/auth.guard';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiCreatedResponse({ type: PostResponseDTO })
  @ApiBearerAuth('jwt-token')
  @UseGuards(AuthGuard)
  @Post('create')
  async createPost(
    @Body() postDTO: PostDTO,
    @Req() req,
  ): Promise<PostResponseDTO> {
    return this.postService.createPost(postDTO, req?.id);
  }
}

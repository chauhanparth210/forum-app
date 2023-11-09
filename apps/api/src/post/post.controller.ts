import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
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
    const userId = req?.id;
    return this.postService.createPost(postDTO, userId);
  }

  @ApiCreatedResponse({ type: PostResponseDTO, isArray: true })
  @ApiBearerAuth('jwt-token')
  @UseGuards(AuthGuard)
  @Get('my-post')
  async getUserSpecificPosts(@Req() req): Promise<PostResponseDTO[]> {
    const userId = req.id;
    return this.postService.getUserSpecificPosts(userId);
  }

  @ApiOkResponse()
  @ApiBearerAuth('jwt-token')
  @UseGuards(AuthGuard)
  @Delete('delete')
  async deletePost(@Query('postId') postId: string, @Req() req): Promise<void> {
    const userId = req.id;
    return this.postService.deletePost(postId, userId);
  }

  @ApiCreatedResponse({ type: PostResponseDTO, isArray: true })
  @ApiBearerAuth('jwt-token')
  @UseGuards(AuthGuard)
  @Get('news-feed')
  async newsFeeds(@Req() req): Promise<PostResponseDTO[]> {
    const userId = req.id;
    return this.postService.newsFeeds(userId);
  }

  @ApiCreatedResponse({ type: PostResponseDTO, isArray: true })
  @Get()
  async getPosts(): Promise<PostResponseDTO[]> {
    return this.postService.getPosts();
  }
}

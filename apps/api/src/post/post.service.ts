import { Injectable } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostResponseDTO } from './dto/post-response.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createPost(
    { text, isAnonymous },
    userId?: string,
  ): Promise<PostResponseDTO> {
    this.postRepository.save({
      text,
      isAnonymous,
      userId,
    });

    return {
      message: 'post created',
    };
  }
}

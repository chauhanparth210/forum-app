import { Injectable } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
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
    const post = await this.postRepository.save({
      text,
      isAnonymous,
      userId,
    });

    return {
      id: post.id,
      text: post.text,
      isAnonymous: post.isAnonymous,
    };
  }

  async getUserSpecificPosts(userId: string): Promise<PostResponseDTO[]> {
    const posts = await this.postRepository.find({
      where: {
        userId,
      },
      select: {
        id: true,
        text: true,
        created: true,
        isAnonymous: true,
      },
      order: {
        created: 'DESC',
      },
    });

    return posts;
  }

  async newsFeeds(userId: string): Promise<PostResponseDTO[]> {
    const userPosts = this.postRepository.find({
      where: {
        userId,
      },
      select: {
        id: true,
        text: true,
        created: true,
        isAnonymous: true,
        user: {
          id: true,
          email: true,
          username: true,
        },
      },
      relations: {
        user: true,
      },
      order: {
        created: 'DESC',
      },
    });

    const otherNonAnonymousPosts = this.postRepository.find({
      where: {
        isAnonymous: false,
        userId: Not(userId),
      },
      select: {
        id: true,
        text: true,
        created: true,
        user: {
          id: true,
          email: true,
          username: true,
        },
      },
      relations: {
        user: true,
      },
      order: {
        created: 'DESC',
      },
    });

    const result = await Promise.all([userPosts, otherNonAnonymousPosts]);

    const posts = [...result[0], ...result[1]].sort(
      (post1, post2) =>
        new Date(post2.created).getTime() - new Date(post1.created).getTime(),
    );

    return posts;
  }

  async getPosts(): Promise<PostResponseDTO[]> {
    const anonymousPosts = this.postRepository.find({
      where: {
        isAnonymous: true,
      },
      select: {
        id: true,
        text: true,
        created: true,
      },
      order: {
        created: 'DESC',
      },
    });

    const nonAnonymousPosts = this.postRepository.find({
      where: {
        isAnonymous: false,
      },
      select: {
        id: true,
        text: true,
        created: true,
        user: {
          id: true,
          email: true,
          username: true,
        },
      },
      relations: {
        user: true,
      },
      order: {
        created: 'DESC',
      },
    });

    const result = await Promise.all([anonymousPosts, nonAnonymousPosts]);

    const posts = [
      ...result[0].map((post) => {
        return {
          ...post,
          user: null,
        };
      }),
      ...result[1],
    ].sort(
      (post1, post2) =>
        new Date(post2.created).getTime() - new Date(post1.created).getTime(),
    );

    return posts;
  }

  async deletePost(postId: string, userId: string): Promise<void> {
    await this.postRepository
      .createQueryBuilder('post')
      .delete()
      .where('id = :id', { id: postId })
      .andWhere('userId = :userId', { userId })
      .execute();
    return;
  }
}

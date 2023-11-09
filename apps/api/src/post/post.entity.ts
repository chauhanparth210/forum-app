import { UserEntity } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  created: Date;

  @Column('bool', { default: false })
  isAnonymous: boolean;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;
}

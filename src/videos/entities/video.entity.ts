import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../utils/relational-entity-helper';
import { VideoStateType } from '../types/video-state.enum';
import { TagEntity } from './tag.entity';
import { ThumbnailEntity } from './thumbnail.entity';
import { ChannelEntity } from './channel.entity';

@Entity({
  name: 'video',
})
export class VideoEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, default: null })
  category: number;

  @Column({ nullable: true, default: null })
  description: string;

  @Column()
  duration: number;

  @Column({ default: 0 })
  views: number;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  dislikes: number;

  @Column({ default: 0 })
  comments: number;

  @Column({ default: false })
  isLive: boolean;

  @Column()
  url: string;

  @Column()
  downloadEnabled: boolean;

  @Column()
  waitTranscoding: boolean;

  @Column()
  state: VideoStateType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  publishedAt: Date;

  @ManyToOne(() => ChannelEntity, {
    onDelete: 'CASCADE',
  })
  channel: ChannelEntity | null;

  @ManyToMany(() => TagEntity, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  tags: TagEntity[];

  @OneToMany(() => ThumbnailEntity, (thumbnail) => thumbnail.video, {
    onDelete: 'CASCADE',
  })
  thumbnails: ThumbnailEntity[];
}

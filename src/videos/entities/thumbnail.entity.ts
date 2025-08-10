import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VideoEntity } from './video.entity';

@Entity({
  name: 'thumbnail',
})
export class ThumbnailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => VideoEntity, {
    onDelete: 'CASCADE',
  })
  video: VideoEntity;
}

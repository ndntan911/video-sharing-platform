import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../users/infrastructure/persistence/relational/entities/user.entity';
import { VideoEntity } from './video.entity';

@Entity({
  name: 'channel',
})
export class ChannelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: null, nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.channels)
  user: UserEntity;

  @OneToMany(() => VideoEntity, (video) => video.channel, {
    onDelete: 'CASCADE',
  })
  videos: VideoEntity[];
}

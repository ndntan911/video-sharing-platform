import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoEntity } from './entities/video.entity';
import { Repository } from 'typeorm';
import { ThumbnailEntity } from './entities/thumbnail.entity';
import { TagEntity } from './entities/tag.entity';
import { ChannelEntity } from './entities/channel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VideoEntity,
      ChannelEntity,
      ThumbnailEntity,
      TagEntity,
    ]),
  ],
  controllers: [VideosController],
  providers: [VideosService, Repository],
  exports: [VideosService],
})
export class VideosModule {}

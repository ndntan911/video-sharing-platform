import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VideoEntity } from './entities/video.entity';

@Injectable()
export class VideosService {
  constructor(private readonly videosRepository: Repository<VideoEntity>) {}
}

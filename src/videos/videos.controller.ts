import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller({
  version: '1',
  path: 'videos',
})
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  upload() {}
}

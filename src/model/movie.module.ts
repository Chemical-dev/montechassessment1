import { Module } from '@nestjs/common';
import { MovieService } from '../service/movie.service';
import { MovieController } from '../controller/movie.controller';
import { movieProviders } from './movieproviders.model';

@Module({
  providers: [MovieService, ...movieProviders],
  controllers: [MovieController],
})
export class MovieModule {}
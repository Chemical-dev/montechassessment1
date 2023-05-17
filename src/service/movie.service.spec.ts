import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';
import { MovieDto } from 'src/dtos/movie.dto';

describe('MovieService', () => {
  let movieService: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    movieService = module.get<MovieService>(MovieService);
  });

  describe('create', () => {
    it('should create a movie', async () => {
      const movieDto = new MovieDto();
      movieDto.title = 'Test Movie';
      movieDto.yearReleased = 2021;
      movieDto.rating = 9.0;
      movieDto.category = 'Test Genre';

      const result = await movieService.create(movieDto);

      expect(result.title).toEqual(movieDto.title);
      expect(result.yearReleased).toEqual(movieDto.yearReleased);
      expect(result.rating).toEqual(movieDto.rating);
      expect(result.category).toEqual(movieDto.category);
      expect(result.id).toBeDefined();
    });
  });
});

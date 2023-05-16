import { MovieService } from '../service/movie.service';
import { Get, Post, Body, Controller, Put, Param, Delete } from '@nestjs/common';
import { UserMovie as MovieEntity, UserMovie } from '../model/movie.model';
import { MovieDto, MovieOutputDto } from 'src/dtos/movie.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from "src/constants/response.constant";

@ApiTags("movies")
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async createMovie(@Body() movie: MovieDto): Promise<ApiResponse<MovieEntity>> {
    try {
      const createdMovie = await this.movieService.create(movie);
      return new ApiResponse<MovieEntity>(true, 'Movie created successfully', createdMovie);
    } catch (error) {
      return new ApiResponse<MovieEntity>(false, 'Failed to create movie', null);
    }
  }

  @Put(':id')
  async editMovie(
    @Body() movie: MovieDto,
    @Param('id') id: number,
  ): Promise<ApiResponse<MovieEntity>> {
    try {
      const editedMovie = await this.movieService.editMovie(movie, id);
      return new ApiResponse<MovieEntity>(true, 'Movie edited successfully', editedMovie);
    } catch (error) {
      return new ApiResponse<MovieEntity>(false, 'Failed to edit movie', null);
    }
  }

  @Get(':id')
  async getMovie(@Param('id') id: number): Promise<ApiResponse<MovieEntity>> {
    try {
      const movie = await this.movieService.get(id);
      return new ApiResponse<MovieEntity>(true, 'Movie retrieved successfully', movie);
    } catch (error) {
      return new ApiResponse<MovieEntity>(false, 'Failed to retrieve movie', null);
    }
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: number): Promise<ApiResponse<void>> {
    try {
      await this.movieService.deleteMovie(id);
      return new ApiResponse<void>(true, 'Movie deleted successfully', null);
    } catch (error) {
      return new ApiResponse<void>(false, 'Failed to delete movie', null);
    }
  }

  @Get('/all/movies')
  async getAllMovies(): Promise<ApiResponse<MovieEntity[]>> {
    try {
      const movies = await this.movieService.findAll();
      return new ApiResponse<MovieEntity[]>(true, 'Movies retrieved successfully', movies);
    } catch (error) {
      return new ApiResponse<MovieEntity[]>(false, 'Failed to retrieve movies', null);
    }
  }

  @Get('/mdb/add/:id')
  async getUserMovies(@Param('id') userId: number): Promise<ApiResponse<MovieOutputDto[]>> {
    try {
      const userMovies = await this.movieService.getAllUsersMovies(userId);
      return new ApiResponse<MovieOutputDto[]>(true, 'User movies retrieved successfully', userMovies);
    } catch (error) {
      return new ApiResponse<MovieOutputDto[]>(false, 'Failed to retrieve user movies', null);
    }
  }

  @Put('/rating/add/:id')
  async rateUserMovies(
    @Body() body: any,
    @Param('id') id: number,
  ): Promise<ApiResponse<MovieOutputDto[]>> {
    console.log("ratingcon:", body.rating);
    
    try {
      const rankedMovies = await this.movieService.rankAllUsersMovies(body.movieId, body.rating, id);
      return new ApiResponse<MovieOutputDto[]>(true, 'User movies ranked successfully', rankedMovies);
    } catch (error) {
      return new ApiResponse<MovieOutputDto[]>(false, 'Failed to rank user movies', null);
    }
  
  }

}
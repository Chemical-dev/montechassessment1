import { MovieService } from '../service/movie.service';
import { Get, Post, Body, Controller, Put, Param, Delete } from '@nestjs/common';
import { UserMovie as MovieEntity, UserMovie } from '../model/movie.model';
import { MovieDto, MovieOutputDto } from 'src/dtos/movie.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/model/user.model';

@ApiTags("movies")
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async createMovie(@Body() movie: MovieDto):Promise<MovieEntity>  {
    console.log("dto:", movie);
    
    return this.movieService.create(movie);
  }

  @Put(':id')
  async editMovie(@Body() movie: MovieDto, @Param('id') id: number):Promise<MovieEntity>  {
    console.log("dto:", id);
    
    return this.movieService.editMovie(movie, id);
  }

  @Get(':id')
  async getMovie(@Param('id') id: number):Promise<MovieEntity>  {
    console.log("dto:", id);
    
    return this.movieService.get(id);
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: number):Promise<void>  {
    console.log("dto:", id);
    
    return this.movieService.deleteMovie(id);
  }

  @Get('/all/movies')
  async getAllMovies():Promise<MovieEntity[]>  {
    
    return this.movieService.findAll();
  }

  @Get('/mdb/add/:id')
  async getUserMovies(@Param('id') userId: number):Promise<MovieOutputDto[]>  {
    
    return this.movieService.getAllUsersMovies(userId);
  }

  @Put('/rating/add/:id')
  async rateUserMovies(@Body() movieId: number, rating:number ,@Param('id') id: number):Promise<MovieOutputDto[]>  {
    console.log("body", movieId, rating, id);
    
    return this.movieService.rankAllUsersMovies(movieId,rating, id);
  }

  
}
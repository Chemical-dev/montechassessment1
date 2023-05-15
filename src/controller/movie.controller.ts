import { MovieService } from '../service/movie.service';
import { Get, Post, Body, Controller, Put, Param, Delete } from '@nestjs/common';
import { UserMovie as MovieEntity, UserMovie } from '../model/movie.model';
import { MovieDto } from 'src/dtos/movie.dto';
import { ApiTags } from '@nestjs/swagger';

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

  // @Post('/mdb/add')
  // async addMovies(@Body() listId: string):Promise<void>  {
    
  //   return this.movieService.addMovieToList(listId);
  // }

  
}
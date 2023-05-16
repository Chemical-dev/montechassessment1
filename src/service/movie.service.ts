import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UserMovie } from "../model/movie.model";
import { MOVIE_REPOSITORY } from '../constants/index';
import { MovieDto, MovieOutputDto } from "src/dtos/movie.dto";

@Injectable()
export class MovieService {
    constructor(@Inject(MOVIE_REPOSITORY) private readonly movieRepository: typeof UserMovie) { }

    async create(moviedto: MovieDto): Promise<UserMovie> {
      
        try {
            const movieDto = new MovieDto();
            if (!movieDto || !Object.keys(movieDto).length) {}

            const oldMovie = await this.movieRepository.findAll();
             console.log("movie:", oldMovie);
             
            for (const value of oldMovie) {
                if (value.title.toLowerCase() === moviedto.title.toLowerCase()) {
                    continue;
                }
    
                const movie = await this.movieRepository.create(moviedto);
    
                if (!movie) {
                    continue;
                }
                 console.log("movie:", movie);
                 
                return movie;
            }
    
        } catch (error) {
            return error;
        }
    }
    async editMovie(moviedto: MovieDto, movieId: number): Promise<UserMovie> {
        try {
          const movieDto = new MovieDto();
          if (!movieDto || !Object.keys(movieDto).length || !movieId) {}
      
          const oldMovie = await this.movieRepository.findOne({ where: { id: movieId } });
          console.log(oldMovie);
      
          if (!oldMovie) { throw new Error('Movie not found');}
      
          const updatedMovie = await this.movieRepository.update(
            { ...moviedto },
            { where: { id: movieId } }
          );
  
          if (updatedMovie[0] != 1) {
            throw new Error('Movie not updated');
          }
          
          return await this.movieRepository.findOne({ where: { id: movieId } });
          
        } catch (error) {
          throw error;
        }
      }
      

      async deleteMovie(movieId: number): Promise<void> {
        try {
          const oldMovie = await this.movieRepository.findOne({ where: { id: movieId } });
          if (!oldMovie) {
            throw new Error('Movie not found');
          }
      
          await this.movieRepository.destroy({ where: { id: movieId } });
        } catch (error) {
          throw error;
        }
      }

      async get(movieId: number): Promise<UserMovie> {
        try {
          const movie = await this.movieRepository.findOne({ where: { id: movieId } });
      
          if (!movie) {
            throw new Error('Movie not found');
          }
      
          return movie;
        } catch (error) {
          throw error;
        }
      }

      async findAll(): Promise<UserMovie[]> {
        
        return await this.movieRepository.findAll();
      } 

      async getAllUsersMovies(userId: number): Promise<MovieOutputDto[]> {
        try {
          const movies = await this.movieRepository.findAll({ where: { userId: userId } });
      
          if (!movies || movies.length === 0) {
            throw new Error('No movies found for this user');
          }
      
          const movieDtos: MovieOutputDto[] = movies.map((movie) => {
            const movieDto = new MovieOutputDto(movie);
            return movieDto;
          });
      
          return movieDtos;
        } catch (error) {
          throw error;
        }
      }
      

      async rankAllUsersMovies(movieId: number, nrating: number, userId: number): Promise<MovieOutputDto[]> {
        try {
          const movies = await this.movieRepository.findAll({ where: { userId: userId } });
      
          if (!movies || movies.length === 0) {
            throw new Error('No Movie(s) found for this user');
          }
      
          const updatedMovies: UserMovie[] = [];
          const movieDtos: MovieOutputDto[] = [];
      
          for (const movie of movies) {
            if (movie.id === movieId) {
              movie.rating = nrating;
              await this.movieRepository.update({ rating: nrating }, { where: { id: movieId } });
              updatedMovies.push(movie);
            }
            movieDtos.push(new MovieOutputDto(movie));
          }
      
          if (updatedMovies.length === 0) {
            throw new Error('Movie not found');
          }
      
          return movieDtos;
        } catch (error) {
          throw error;
        }
      }
      
}

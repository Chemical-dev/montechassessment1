import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UserMovie } from "../model/movie.model";
import { MOVIE_REPOSITORY } from '../constants/index';
import { MovieDto } from "src/dtos/movie.dto";
import { plainToClass } from 'class-transformer';
import { IsEmpty, validate } from 'class-validator';
import { IsNull } from "sequelize-typescript";

@Injectable()
export class MovieService {
    constructor(@Inject(MOVIE_REPOSITORY) private readonly movieRepository: typeof UserMovie) { }

    // async create(post: MovieDto): Promise<UserMovie> {
    
    //     try {
    //         const movieDto = new MovieDto();
    //         if (!movieDto|| !Object.keys(movieDto).length){}
    //         const oldMovie = await this.movieRepository.findAll();
    //         oldMovie.forEach((value)=>{
    //             if (value.title.toLowerCase() === post.title.toLowerCase()) return "";
    //             const movie = await this.movieRepository.create(post);
                
    //             if (!movie) return "";
    //             return movie
    //         })
    //         console.log(oldMovie);
            
    //     } catch (error) {
    //         return error;
    //     }
    
    // }

    async create(post: MovieDto): Promise<UserMovie> {
        try {
            const movieDto = new MovieDto();
            if (!movieDto || !Object.keys(movieDto).length) {}
    
            const oldMovie = await this.movieRepository.findAll();
    
            for (const value of oldMovie) {
                if (value.title.toLowerCase() === post.title.toLowerCase()) {
                    continue;
                }
    
                const movie = await this.movieRepository.create(post);
    
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
    async editMovie(post: MovieDto, movieId: number): Promise<UserMovie> {
        try {
          const movieDto = new MovieDto();
          if (!movieDto || !Object.keys(movieDto).length || !movieId) {}
      
          const oldMovie = await this.movieRepository.findOne({ where: { id: movieId } });
          console.log(oldMovie);
      
          if (!oldMovie) return;
      
          const updatedMovie = await this.movieRepository.update(
            { ...post },
            { where: { id: movieId } }
          );
      
          console.log("updated:", updatedMovie);
          if (updatedMovie[0] != 1) {
            return;
          } else {
            return oldMovie;
          }
        } catch (error) {}
      }
      

      async deleteMovie(movieId: number): Promise<void> {
        try {
          const oldMovie = await this.movieRepository.findOne({ where: { id: movieId } });
          if (!oldMovie) {
            return;
          }
      
          await this.movieRepository.destroy({ where: { id: movieId } });
        } catch (error) {
          // handle error
        }
      }

      async get(movieId: number): Promise<UserMovie> {
        try {
          const movie = await this.movieRepository.findOne({ where: { id: movieId } });
      
          if (!movie) {
            return;
          }
      
          return movie;
        } catch (error) {
          // handle error
        }
      }

      async findAll(): Promise<UserMovie[]> {
        
        return await this.movieRepository.findAll();
      }
      
      
}
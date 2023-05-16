import { IsNotEmpty, IsString, IsNumber, Min, Max, ValidateNested, IsDecimal } from 'class-validator';
import { UserMovie } from 'src/model/movie.model';


export class MovieDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsNotEmpty()
    @IsNumber()
    yearReleased: number;
}

export class MovieOutputDto {
    id: number;
    title: string;
    category: string;
    rating: number;
    yearReleased: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;


    constructor(movie: UserMovie) {
        this.id = movie.id;
        this.title = movie.title;
        this.category = movie.category;
        this.rating = movie.rating;
        this.yearReleased = movie.yearReleased;
        this.userId = movie.userId;
        this.createdAt = movie.createdAt;
        this.updatedAt = movie.updatedAt;
      }
  }
  

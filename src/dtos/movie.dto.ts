import { IsNotEmpty, IsString, IsNumber, Min, Max, ValidateNested, IsDecimal } from 'class-validator';


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
  }
  

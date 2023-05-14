
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';


export class userDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    password: string;
}

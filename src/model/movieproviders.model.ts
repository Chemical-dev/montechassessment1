import { MOVIE_REPOSITORY } from "src/constants";
import { UserMovie } from "./movie.model";


export const movieProviders = [
    {
        provide: MOVIE_REPOSITORY,
        useValue: UserMovie,
    },
];
import { USER_REPOSITORY } from "src/constants";
import { User } from "./user.model";


export const userProviders = [
    {
        provide: USER_REPOSITORY,
        useValue: User,
    },
];
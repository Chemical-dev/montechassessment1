import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY } from "src/constants";
import { UserDto } from "src/dtos/user.dto";
import { User } from "src/model/user.model";

@Injectable()
export class UserService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async createUser(user: UserDto): Promise<User> {
        console.log("servicedto:", user);
        
        try {
            // const oldUsers = await this.userRepository.findAll();
            // console.log("users:", oldUsers);
            
            // for (const value of oldUsers) {
            //     if (value.email.toLowerCase() === user.email.toLowerCase()) {
            //         continue;
            //     }
    
                const newUser = await this.userRepository.create(user);
                console.log("movie:", newUser);
    
                // if (!newUser) {
                //     continue;
                // }
                 console.log("movie:", newUser);
                 
                return newUser;
            // }
        } catch (error) {
            
        }
    }

}
import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "src/dtos/user.dto";
import { User as UserEntity} from "src/model/user.model";
import { UserService } from "src/service/user.service";


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: UserDto):Promise<UserEntity>  {
    console.log("dto:", user);
    
    
    return this.userService.createUser(user);
  }
}

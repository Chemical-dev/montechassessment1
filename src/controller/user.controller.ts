import { Body, Controller, Post } from "@nestjs/common";
import { userDto } from "src/dtos/user.dto";
import { User as UserEntity} from "src/model/user.model";
import { UserService } from "src/service/user.service";


@Controller('movies')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: userDto):Promise<UserEntity>  {
    
    return this.userService.createUser(user);
  }
}

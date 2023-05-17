import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "src/dtos/user.dto";
import { User as UserEntity} from "src/model/user.model";
import { UserService } from "src/service/user.service";
import { ApiResponse } from "src/constants/response.constant";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("user")
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: UserDto): Promise<ApiResponse<UserEntity>> {
    try {
      const createdUser = await this.userService.createUser(user);
      return new ApiResponse<UserEntity>(true, 'User created successfully', createdUser);
    } catch (error) {
      return new ApiResponse<UserEntity>(false, 'Failed to create user', null);
    }
  }
}

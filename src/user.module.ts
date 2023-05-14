import { Module } from '@nestjs/common';
import { userProviders } from './model/userprovider';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';


@Module({
    providers: [UserService, ...userProviders],
    controllers:  [UserController],
  })
export class UserModule {}
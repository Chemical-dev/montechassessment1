import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
dotenv.config();
import { AppModule } from './app.module';
import { ValidateInputPipe } from './pipes/validate.pipe';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());
  SwaggerModule.setup('api/test', app, createDocument(app));
  // await Movie.sync();
  await app.listen(3000);
}
process.on('unhandledRejection', (reason, p) => {
  console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
  // application specific logging, throwing an error, or other logic here
});
bootstrap();

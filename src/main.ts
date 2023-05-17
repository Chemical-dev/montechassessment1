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
  app.useGlobalPipes(new ValidateInputPipe());
  SwaggerModule.setup('api/test', app, createDocument(app));
  
  await app.listen(3000);
}
process.on('unhandledRejection', (reason, p) => {
  console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);

});
bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe()); // Tell Nest to use the global validation
  await app.listen(3000);
}
bootstrap();

// Validation pipeline
//1) Use class-transformer to turn the body into an instance of the DTO class
//2) Use class-validator to validate the instance
//3) If there are validation errors, respond immediately, otherwise provide body to request handler

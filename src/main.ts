import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const validationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
}

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: corsOptions
  });
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
}
bootstrap();


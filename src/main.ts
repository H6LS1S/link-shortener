import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const port = parseInt(process.env.NEST_PORT) || 80;
  const app = await NestFactory.create(AppModule);
  const options = await new DocumentBuilder()
    .setTitle('Link shorter example')
    .setDescription('The app API description')
    .setVersion('1.0')
    .addTag('H6LS1S')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app
    .use(bodyParser.json())
    .useGlobalPipes(new ValidationPipe())
    .setGlobalPrefix(process.env.NEST_API_PREFIX)
    .listen(port);

}

bootstrap();

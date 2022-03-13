import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Autores e livros')
    .setDescription(
      'Api para aprender NestJS com PrismaJS usando relacionamento MxM entre Autores de livros e Livros',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () =>
    Logger.log(`server running on ${PORT}`, 'Server'),
  );
}
bootstrap();

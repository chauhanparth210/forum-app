import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('forum-app')
    .setDescription('This is an API documentation of forum-app')
    .setVersion('1.0')
    .addTag('APIs')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('documenation', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();

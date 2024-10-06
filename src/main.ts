import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configServie = app.get<ConfigService>(ConfigService);
  app.useGlobalPipes(new ValidationPipe()); 

  //Swagger config
  const swaggerConfig = new DocumentBuilder()
                        .setTitle('swagger')
                        .setVersion('1.1')
                        .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig); 
  SwaggerModule.setup('swagger', app, document); 

  await app.listen(configServie.get('PortNo'));
}

bootstrap();

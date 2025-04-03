import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { InfoController } from './data/info.controller';
import { InfoService } from './data/info.service';
import { CouchDBController } from './couchdb/couchdb.controller';
import { CouchDBService } from './couchdb/couchdb.service';

@Module({
  imports: [],
  controllers: [InfoController, CouchDBController], // CouchDB-Controller hinzugefügt
  providers: [InfoService, CouchDBService],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS aktivieren und nur Anfragen von localhost:5173 zulassen
  app.enableCors({
    origin: 'http://localhost:5173', // Frontend-URL, die Zugriff auf das Backend haben soll
    methods: 'GET,POST,PUT,DELETE',  // Erlaubte HTTP-Methoden
    allowedHeaders: 'Content-Type', // Erlaubte Header, z. B. Content-Type
  });

  // Swagger-Dokumentation
  const config = new DocumentBuilder()
    .setTitle('Personal API')
    .setDescription('API für das Hinzufügen und Verwalten von Filmen')
    .setVersion('1.0')
    .addTag('Infos')
    .addTag('CouchDB')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
// src/couchdb/couchdb.controller.ts
import { Controller, Get, Post } from '@nestjs/common';
import { CouchDBService } from './couchdb.service';

@Controller('couchdb')
export class CouchDBController {
  constructor(private readonly couchDBService: CouchDBService) {}

  @Post('create-database')
  async createDatabase() {
    await this.couchDBService.createDatabase();
    return { message: 'Datenbank erstellt (falls nicht vorhanden).' };
  }

  @Get('info')
  async getDatabaseInfo() {
    return await this.couchDBService.getDatabaseInfo();
  }
}
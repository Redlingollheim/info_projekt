// src/couchdb/couchdb.service.ts
import { Injectable } from '@nestjs/common';
import Nano from 'nano';

@Injectable()
export class CouchDBService {
  public db: Nano.DocumentScope<any>;

  constructor() {
    const nano: Nano.ServerScope = Nano('http://admin:123456@localhost:5984');
    this.db = nano.db.use('info_db');
  }

  async createDatabase() {
    try {
      await this.db.info();
    } catch (error: unknown) {
      if (error instanceof Error && (error as any).statusCode === 404) {
        await Nano('http://localhost:5984').db.create('info_db');
      }
    }
  }

  async getDatabaseInfo() {
    return await this.db.info();
  }
}
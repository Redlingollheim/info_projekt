
import { Injectable } from '@nestjs/common';
import { CouchDBService } from '../couchdb/couchdb.service';
import { Info } from './info.dto';

@Injectable()
export class InfoService {
  constructor(private readonly couchDBService: CouchDBService) {}

  async create(movie: Info) {
    return await this.couchDBService.db.insert(movie);
  }

  async findAll(): Promise<Info[]> {
    const result = await this.couchDBService.db.list({ include_docs: true });
    return result.rows
      .filter((row) => row.doc)
      .map((row) => new Info(row.doc!.id, row.doc!.name, row.doc!.position, row.doc!.salary));
  }

  async findById(id: string): Promise<Info> {
    const doc = await this.couchDBService.db.get(id);
    return new Info(doc.id, doc.name, doc.position, doc.salary);
  }

  async update(id: string, info: Info) {
    const existingDoc = await this.couchDBService.db.get(id);
    return await this.couchDBService.db.insert({ ...existingDoc, ...info });
  }

  async delete(id: string) {
    const existingDoc = await this.couchDBService.db.get(id);
    return await this.couchDBService.db.destroy(id, existingDoc._rev);
  }
}
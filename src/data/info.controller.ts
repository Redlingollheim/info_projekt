import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InfoService } from './info.service';
import { Info } from './info.dto';

@Controller('infos')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post()
  async create(@Body() info: Info): Promise<void> {
    await this.infoService.create(info);
  }

  @Get()
  async findAll(): Promise<Info[]> {  // Rückgabetyp geändert zu Promise<Movie[]>
    return await this.infoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Info | undefined> {  // Rückgabetyp angepasst
    return await this.infoService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() info: Info): Promise<void> {  // Rückgabetyp angepasst
    await this.infoService.update(id, info);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {  // Rückgabetyp angepasst
    await this.infoService.delete(id);
  }
}
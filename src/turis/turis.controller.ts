import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TurisService } from './turis.service';
import { CreateTurisDto } from './dto/create-turis.dto';

@Controller('turis')
export class TurisController {
  constructor(private readonly turisService: TurisService) {}

  @Get()
  getAll() {
    return this.turisService.findAll();
  }

  @Post()
  create(@Body() data: CreateTurisDto) {
    return this.turisService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.turisService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.turisService.remove(id);
  }
}

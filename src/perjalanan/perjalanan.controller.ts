import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { TurisPerjalananService } from "./perjalanan.service";
import { PerjalananTurisDto } from "./dto/create-perjalanan.dto";
import { UpdateResult, DeleteResult } from "typeorm";

@Controller("perjalanan")
export class TurisPerjalananController {
  constructor(private readonly turisPerjalananService: TurisPerjalananService) {}

  @Get()
  findAll() {
    return  this.turisPerjalananService.findAll();
  }

  @Post()
   create(@Body() data: PerjalananTurisDto) {
    return  this.turisPerjalananService.create(data);
  }

  @Put(":id")
   update(@Param("id") id: number, @Body() data: Partial<PerjalananTurisDto>): Promise<UpdateResult> {
    return this.turisPerjalananService.update(id, data);
  }

  @Delete(":id")
   remove(@Param("id") id: number): Promise<DeleteResult> {
    return this.turisPerjalananService.remove(id);
  }
}

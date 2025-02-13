import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TurisPerjalanan } from "./entities/perjalanan.entity";
import { PerjalananTurisDto } from "./dto/create-perjalanan.dto";

@Injectable()
export class TurisPerjalananService {
  constructor(
    @InjectRepository(TurisPerjalanan)
    private turisPerjalananRepo: Repository<TurisPerjalanan>
  ) {}

  findAll() {
    return this.turisPerjalananRepo.query("SELECT * FROM perjalanan p");
  }

  create(data: PerjalananTurisDto) {
    if (!data || Object.keys(data).length === 0) {
      throw new Error("Data cannot be empty");
    }
    return this.turisPerjalananRepo.save(data);
  }
  

  update(id: number, data: Partial<TurisPerjalanan>) {
    if (!Object.keys(data).length) {
      throw new Error("Update data cannot be empty");
    }
    return  this.turisPerjalananRepo.update(id, data);
  }  

  remove(id: number) {
    const record =  this.turisPerjalananRepo.findOne({ where: { id } });
    if (!record) {
      throw new Error(`Data with ID ${id} not found`);
    }
    return  this.turisPerjalananRepo.delete(id);
  }
  
}

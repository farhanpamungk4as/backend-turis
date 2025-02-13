import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Turis } from "./entities/turis.entity";
import { CreateTurisDto } from "./dto/create-turis.dto";

@Injectable()
export class TurisService {
  constructor(@InjectRepository(Turis) private turisRepo: Repository<Turis>) {}

  findAll() {
    return this.turisRepo.find({
      select: ["nama", "umur", "tanggal_lahir", "tempat_tinggal"],
    });
  }  

  create(data: CreateTurisDto) {
    return this.turisRepo.save(data);
  }

  update(id: number, data: Partial<Turis>) {
    return this.turisRepo.update(id, data);
  }

  remove(id: number) {
    return this.turisRepo.delete(id);
  }
}

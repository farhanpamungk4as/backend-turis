import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TurisPerjalanan } from "./entities/perjalanan.entity";
import { TurisPerjalananService } from "./perjalanan.service";
import { TurisPerjalananController } from "./perjalanan.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TurisPerjalanan])], // Menghubungkan entity ke TypeORM
  controllers: [TurisPerjalananController], // Daftarkan controller
  providers: [TurisPerjalananService], // Daftarkan service
  exports: [TurisPerjalananService], // Jika ingin digunakan di module lain
})
export class TurisPerjalananModule {}

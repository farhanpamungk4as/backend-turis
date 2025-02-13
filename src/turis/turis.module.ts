import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turis } from './entities/turis.entity';
import { TurisService } from './turis.service';
import { TurisController } from './turis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Turis])],
  controllers: [TurisController],
  providers: [TurisService],
})
export class TurisModule {}

import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Turis } from './turis/entities/turis.entity';
import { TurisPerjalanan } from './perjalanan/entities/perjalanan.entity';
import { TurisModule } from './turis/turis.module';
import { TurisPerjalananModule } from './perjalanan/perjalanan.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER || 'kujang4531',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'portfoliodatabase',
      entities: [Turis, TurisPerjalanan],
      synchronize: true,
    }),
    TurisModule,
    TurisPerjalananModule,
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('✅ Database Connected Successfully!');
  }
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Turis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false }) // ✅ Pastikan nullable: false
  nama: string;

  @Column()
  umur: number;

  @Column({ type: 'date', nullable: false }) // ✅ Pastikan nullable: false
  tanggal_lahir: Date;

  @Column({ length: 255 })
  tempat_tinggal: string;
}

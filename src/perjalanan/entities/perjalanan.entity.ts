import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TurisPerjalanan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  provinsi: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  kota: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  tujuan_1: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  tujuan_2: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  tujuan_3: string;

  @Column({ type: "timestamptz", nullable: true })
  dari: Date;

  @Column({ type: "timestamptz", nullable: true })
  sampai: Date;

  @Column({ type: "varchar", length: 50, nullable: false })
  status: string;
}

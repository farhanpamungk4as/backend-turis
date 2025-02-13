import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export default new DataSource({
  type: "mysql", // Ganti ke "postgres" jika pakai PostgreSQL
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + "/src/**/*.entity{.ts,.js}"],
  synchronize: true, // Jangan aktifkan di produksi!
});

import { IsNotEmpty, IsInt, IsString, IsDate } from "class-validator";

export class PerjalananTurisDto {

  @IsNotEmpty()
  @IsInt()
  email: string;

  @IsNotEmpty()
  @IsString()
  provinsi: string;

  @IsNotEmpty()
  @IsString()
  kota: string;

  @IsNotEmpty()
  @IsString()
  tujuan_1: string;

  @IsNotEmpty()
  @IsString()
  tujuan_2: string;

  @IsNotEmpty()
  @IsString()
  tujuan_3: string;

  @IsNotEmpty()
  @IsString()
  dari: Date;

  @IsNotEmpty()
  @IsDate()
  sampai: Date;

  @IsNotEmpty()
  @IsDate()
  status: string;
}

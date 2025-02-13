import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateTurisDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsInt()
  umur: number;

  @IsNotEmpty()
  @IsString()
  tanggalLahir: string;

  @IsNotEmpty()
  @IsString()
  tempatTinggal: string;
}

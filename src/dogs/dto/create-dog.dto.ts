import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
//instalar el "npm install class-validator"
export class CreateDogDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  raza: string;

  @IsNotEmpty()
  @IsNumber()
  edad: number;
}

//
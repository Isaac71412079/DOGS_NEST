import { PartialType } from '@nestjs/mapped-types';
//instalar: "npm install @nestjs/mapped-types"
import { CreateDogDto } from './create-dog.dto';

export class UpdateDogDto extends PartialType(CreateDogDto) {}

//PartialType es una función que se utiliza para crear un nuevo tipo que hereda todas las propiedades de otro tipo, pero las marca como opcionales.
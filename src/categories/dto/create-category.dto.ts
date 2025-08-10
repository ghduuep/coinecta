import { IsInt } from "class-validator";

export class CreateCategoryDto {
  name: string;
  @IsInt({message: 'ID do usuário dever ser um numero inteiro.'})
  userId: number;
}

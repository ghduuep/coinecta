import { IsDateString, IsEnum, IsInt, IsOptional, IsPositive } from "class-validator";
import { Category, TransactionType, User } from "generated/prisma";

export class CreateTransactionDto {
  @IsEnum(TransactionType, {message: 'Tipo de categoria inválido.'})
  type: TransactionType;
  @IsPositive({message: 'O valor deve ser maior que 0.'})
  amount: number;
  @IsOptional()
  description?: string;
  @IsDateString({}, {message: 'Insira uma data válida.'})
  date: Date;
  @IsInt({message: 'ID de usuário deve ser um número inteiro.'})
  userId: number;
  @IsOptional()
  @IsInt({message: 'ID da categoria deve ser um número inteiro.'})
  categoryId?: number;
}

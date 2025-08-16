import { IsOptional, IsEmail, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail({}, { message: 'Insira um e-mail válido.' })
  email?: string;

  @IsOptional()
  @Length(6, 40, { message: 'A senha deve conter no mínimo 6 caracteres.' })
  password?: string;
  @IsOptional()
  name?: string;
}

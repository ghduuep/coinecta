import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Insira um e-mail válido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
  @Length(6, 40)
  password: string;
  @IsOptional()
  name?: string;
}

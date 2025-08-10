import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail({}, { message: 'Insira um e-mail válido.' })
  email: string;
  @IsString()
  password: string;
}

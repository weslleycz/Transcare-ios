import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDTO {
  @IsOptional()
  corporate_name!: string;

  @IsOptional()
  gender!: string;

  @IsOptional()
  age!: string;

  @IsOptional()
  profession!: string;

  @IsString()
  @IsNotEmpty({ message: "Esse campo e obrigatório" })
  name!: string;

  @IsString()
  @IsEmail({}, { message: "Este não é um e-mail válido" })
  @IsNotEmpty({ message: "Você precisa informar o seu email" })
  email!: string;

  @IsNotEmpty({ message: "Você precisa informar a sua senha" })
  password!: string;

  @IsNotEmpty()
  isCheckbox!: string;
}

import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RedefinePasswordDTO {
  @IsString()
  @IsNotEmpty({ message: "Você precisa informar o seu email" })
  @IsEmail({}, { message: "Este não é um e-mail válido" })
  email!: string;
}

export class RedefineDTO {
  @IsNotEmpty({ message: "Você precisa informar a senha" })
  password!: string;

  @IsNotEmpty({ message: "Você precisa informar o código" })
  code!: string;
}

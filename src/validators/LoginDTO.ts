import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDTO {
  @IsNotEmpty({ message: "Você precisa informar o seu email" })
  email!: string;

  @IsNotEmpty({ message: "Você precisa informar a sua senha" })
  password!: string;
}

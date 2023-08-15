import * as yup from 'yup';

export const UserSchema = yup.object().shape({
  corporate_name: yup.string().optional(),
  gender: yup.string().optional(),
  age: yup.string().optional(),
  profession: yup.string().optional(),
  name: yup.string().required("Esse campo é obrigatório"),
  email: yup.string().email("Este não é um e-mail válido").required("Você precisa informar o seu email"),
  password: yup.string().required("Você precisa informar a sua senha"),
  isCheckbox: yup.string().optional(),
});
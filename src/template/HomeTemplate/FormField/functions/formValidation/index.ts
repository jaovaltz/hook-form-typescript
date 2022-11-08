import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    username: yup
      .string()
      .required('O nome de usuário deve ser preenchido')
      .min(3, 'O nome deve ter no mínimo 3 caracteres')
      .max(40, 'O nome deve ter no máximo 40 caracteres')
      .trim(),
    email: yup
      .string()
      .email('Digite um e-mail válido. ex: teste@gmail.com')
      .required('O e-mail deve ser preenchido.')
      .trim(),
    telephone: yup
      .string()
      .required('O telefone deve ser preenchido.')
      .length(11, 'O telefone deve ter 11 caracteres')
      .matches(/^[0-9]+$/, 'Digite um número de telefone válido.'),
    message: yup
      .string()
      .required('A mensagem deve ser preenchida.')
      .min(10, 'A mensagem deve ter no mínimo 10 caracteres')
      .max(500, 'A mensagem deve ter no máximo 500 caracteres')
      .trim()
  })
  .required()

export const resolver = yupResolver(schema)

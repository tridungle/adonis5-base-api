import { ResponseContract } from '@ioc:Adonis/Core/Response'

export function updated(response: ResponseContract, data: any = null, message?: string) {
  if (!message) message = 'Registro criado com sucesso.'
  return response.status(200).send({ data, message })
}

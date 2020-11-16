import { ResponseContract } from '@ioc:Adonis/Core/Response'

export function created(response: ResponseContract, data: any = null, message?: string) {
  if (!message) message = 'Registro atualizado com sucesso.'
  return response.status(200).send({ data, message })
}

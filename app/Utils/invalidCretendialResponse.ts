import { ResponseContract } from '@ioc:Adonis/Core/Response'

export function invalidCredential(response: ResponseContract, message?: string) {
  if (!message) message = 'Crendiciais inválidas.'
  return response.status(401).send({ message })
}

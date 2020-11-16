import { ResponseContract } from '@ioc:Adonis/Core/Response'
type Body = { message: string; data?: any }

export function badRequest(response: ResponseContract, message?: string, data: any = null) {
  if (!message) message = 'Erro ao processar solitação.'
  const body = { message } as Body
  if (data) body.data = data
  return response.status(400).send(body)
}

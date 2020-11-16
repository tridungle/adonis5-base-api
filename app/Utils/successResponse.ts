import { ResponseContract } from '@ioc:Adonis/Core/Response'

export function success(response: ResponseContract, body: any = null) {
  const status = body === null ? 204 : 200
  return response.status(status).send(body)
}

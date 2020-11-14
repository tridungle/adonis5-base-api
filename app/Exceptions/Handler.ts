import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {
    if (error.code === 'E_ROUTE_NOT_FOUND') {
      const message = 'Ooops! Essa rota não existe.'
      return ctx.response.status(404).send({ message })
    }
    return super.handle(error, ctx)
  }
}

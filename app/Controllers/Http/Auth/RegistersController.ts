import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserService } from 'App/Services/UserService'
import { badRequest, created } from 'App/Utils'

export default class RegistersController {
  protected service: UserService

  constructor() {
    this.service = new UserService()
  }

  public async register({ response, request }: HttpContextContract) {
    try {
      const user = await this.service.register(request.all())
      return created(response, user, 'Usuário criado com sucesso.')
    } catch (_) {
      return badRequest(response, 'Erro ao criar usuário.')
    }
  }
}

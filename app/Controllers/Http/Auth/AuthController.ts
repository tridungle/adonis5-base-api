import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthService } from 'App/Services'
import { AuthContract } from 'App/Services/Contracts'
import { invalidCredential, success, badRequest } from 'App/Utils'

export default class AuthController {
  private authService: AuthContract

  constructor() {
    this.authService = new AuthService()
  }

  public async login({ response, request, auth }: HttpContextContract) {
    try {
      const { uid, password } = request.only(['uid', 'password'])
      const authorized = await this.authService.authorize(uid, password, auth)
      return success(response, authorized)
    } catch (_) {
      return invalidCredential(response)
    }
  }

  public async logout({ response, auth }: HttpContextContract) {
    try {
      await auth.logout()
      return success(response)
    } catch (_) {
      return badRequest(response, 'Erro ao realizar logout.')
    }
  }
}

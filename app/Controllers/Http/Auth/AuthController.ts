import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthService } from 'App/Services'
import { AuthContract } from 'App/Services/Contracts'

export default class AuthController {
  private authService: AuthContract

  constructor() {
    this.authService = new AuthService()
  }

  public async login({ response, request, auth }: HttpContextContract) {
    try {
      const { uid, password } = request.only(['uid', 'password'])
      const authorized = await this.authService.authorize(uid, password, auth)
      return response.send(authorized)
    } catch (_) {
      const message = 'Credenciais inválidas.'
      return response.status(401).send({ message })
    }
  }

  public async logout({ response, auth }: HttpContextContract) {
    try {
      await auth.logout()
      return response.status(204).send(null)
    } catch (_) {
      const message = 'Erro ao realizar logout.'
      return response.status(400).send({ message })
    }
  }
}

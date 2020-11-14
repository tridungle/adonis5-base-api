import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ response, request, auth }: HttpContextContract) {
    const uid = request.input('uid')
    const password = request.input('password')

    const token = await auth.attempt(uid, password)
    const { username, email, avatar, firstName, surname } = auth.user as User

    return response.send({ token, user: { email, username, avatar, firstName, surname } })
  }
}

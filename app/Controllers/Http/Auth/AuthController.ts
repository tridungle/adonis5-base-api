import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ response, request, auth }: HttpContextContract) {
    const { uid, password } = request.only(['uid', 'password'])

    const token = await auth.attempt(uid, password, { expiresIn: '10 days' })
    const user = auth.user as User
    const profile = await user.related('profile').query().first()
    const { username, email } = user
    const { avatar, firstName, surname } = profile as Profile

    return response.send({ token, user: { email, username, avatar, firstName, surname } })
  }
}

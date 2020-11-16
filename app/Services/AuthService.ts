import Profile from 'App/Models/Profile'
import User from 'App/Models/User'
import { AuthContract, LoginResponse } from './Contracts/AuthContract'
import { AuthContract as AAuthContract } from '@ioc:Adonis/Addons/Auth'

export class AuthService implements AuthContract {
  public async authorize(
    uid: string,
    password: string,
    auth: AAuthContract
  ): Promise<LoginResponse> {
    const token = await auth.attempt(uid, password, { expiresIn: '10 days' })
    const user = auth.user as User
    const profile = await user.related('profile').query().first()
    const { username, email, id } = user
    const { avatar, firstName, surname } = profile as Profile

    return { token, user: { id, email, username, avatar, firstName, surname } }
  }

  public async logout(auth: AAuthContract): Promise<void> {
    await auth.logout()
  }
}

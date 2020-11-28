import Database from '@ioc:Adonis/Lucid/Database'
import Profile from 'App/Models/Profile'
import User from 'App/Models/User'
import { BaseService } from './BaseService'

export class UserService extends BaseService {
  protected model = new User()

  public async register(attributes: Object) {
    this.model.$trx = await Database.transaction()
    try {
      this.model.fill(attributes)
      const profile = new Profile().fill(attributes)
      await this.model.related('profile').save(profile)
      await this.model.$trx.commit()
      return true
    } catch (error) {
      await this.model.$trx.rollback()
      throw error
    }
  }
}

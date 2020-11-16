import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { ProfileContract } from './Contracts'

export default class Profile extends BaseModel implements ProfileContract {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public firstName: string

  @column()
  public surname: string

  @column()
  public avatar?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}

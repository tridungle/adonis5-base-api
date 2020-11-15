import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import City from './City'
import User from './User'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cityId: number

  @column()
  public userId: number

  @column()
  public zipCode: string

  @column()
  public place: string

  @column()
  public number: string

  @column()
  public neighborhood: string

  @column()
  public complement: string

  @column()
  public isDefault: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => City)
  public city: BelongsTo<typeof City>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}

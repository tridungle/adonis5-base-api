import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import State from './State'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public stateId: string

  @column()
  public code: string

  @column()
  public name: string

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => State)
  public state: BelongsTo<typeof State>
}

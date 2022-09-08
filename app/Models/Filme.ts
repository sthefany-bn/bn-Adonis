import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Filme extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public ano: string

  @column()
  public mensagem: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}

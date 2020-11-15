import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { CountryFactory } from 'Database/factories'

export default class CountrySeeder extends BaseSeeder {
  public async run() {
    await CountryFactory.createMany(5)
  }
}

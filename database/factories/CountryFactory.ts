import Env from '@ioc:Adonis/Core/Env'
import Country from 'App/Models/Country'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { StateFactory } from './'

export const CountryFactory = Factory.define(Country, ({ faker }) => {
  faker.setLocale(Env.get('FAKER_LOCALE'))
  return {
    name: faker.address.country(),
    code: faker.address.countryCode(),
  }
})
  .relation('states', () => StateFactory)
  .build()

import City from 'App/Models/City'
import Env from '@ioc:Adonis/Core/Env'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const CityFactory = Factory.define(City, ({ faker }) => {
  faker.setLocale(Env.get('FAKER_LOCALE'))

  return {
    name: faker.address.city(),
    code: faker.address.cityPrefix(),
  }
}).build()

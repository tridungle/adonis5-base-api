import State from 'App/Models/State'
import Env from '@ioc:Adonis/Core/Env'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { CityFactory } from './'

export const StateFactory = Factory.define(State, ({ faker }) => {
  faker.setLocale(Env.get('FAKER_LOCALE'))

  return {
    name: faker.address.state(),
    initials: faker.address.stateAbbr(),
    code: faker.address.countryCode(),
  }
})
  .relation('cities', () => CityFactory)
  .build()

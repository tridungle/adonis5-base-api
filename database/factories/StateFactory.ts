import State from 'App/Models/State'
import Env from '@ioc:Adonis/Core/Env'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const StateFactory = Factory.define(State, ({ faker }) => {
  faker.setLocale(Env.get('FAKER_LOCALE'))

  return {
    name: faker.address.state(),
    initials: faker.address.stateAbbr(),
    code: faker.address.countryCode(),
  }
}).build()

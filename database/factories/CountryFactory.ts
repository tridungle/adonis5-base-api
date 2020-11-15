import Country from 'App/Models/Country'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const CountryFactory = Factory.define(Country, ({ faker }) => {
  return {
    name: faker.address.country(),
  }
}).build()

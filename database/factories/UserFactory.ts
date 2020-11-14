import slug from 'slug'
import Env from '@ioc:Adonis/Core/Env'
import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  faker.setLocale(Env.get('FAKER_LOCALE'))

  const firstName = faker.name.firstName()
  const surname = faker.name.lastName()
  return {
    firstName,
    surname,
    password: 'secret',
    avatar: faker.internet.avatar(),
    username: slug(faker.internet.userName(firstName, surname)),
    email: faker.internet.email(firstName, surname).toLocaleLowerCase(),
  }
}).build()

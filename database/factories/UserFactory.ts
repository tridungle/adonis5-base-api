import slug from 'slug'
import Env from '@ioc:Adonis/Core/Env'
import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Profile from 'App/Models/Profile'

export const UserFactory = Factory.define(User, ({ faker }) => {
  faker.setLocale(Env.get('FAKER_LOCALE'))
  return {
    password: 'secret',
    username: slug(faker.internet.userName()),
    email: faker.internet.email().toLocaleLowerCase(),
  }
})
  .relation('profile', () => ProfileFactory)
  .build()

export const ProfileFactory = Factory.define(Profile, ({ faker }) => {
  return {
    firstName: faker.name.firstName(),
    surname: faker.name.lastName(),
    avatar: faker.internet.avatar(),
  }
}).build()

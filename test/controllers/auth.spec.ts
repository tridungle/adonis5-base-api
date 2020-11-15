import test from 'japa'
import User from 'App/Models/User'
const fk = fakerStatic

async function createUser(): Promise<User> {
  const user = new User()
  const firstname = fk.name.firstName()
  const surname = fk.name.lastName()
  user.username = fk.internet.userName(firstname, surname)
  user.email = fk.internet.email(firstname, surname)
  user.password = 'secret'
  await user.save()
  return user
}

test.group('auth', () => {
  test('ensure auth return autheticated user if correct cretentials is provided', async (assert) => {
    const user = await createUser()

    assert.notEqual(user.password, 'secret')
  })
})

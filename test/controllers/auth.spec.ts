import axios from 'axios'
import test from 'japa'
import User from 'App/Models/User'
import Profile from 'App/Models/Profile'

async function createUser(): Promise<User> {
  const user = new User()
  user.username = 'valid_username'
  user.email = `valid@email.com`
  user.password = 'secret'

  const profile = new Profile()
  profile.surname = 'surname'
  profile.firstName = 'firstName'

  await user.related('profile').save(profile)
  return user
}

test.group('auth', (group) => {
  group.before(async () => {
    await createUser()
  })

  test('ensure auth return 401 if no correct user data', async (assert) => {
    const form = { uid: 'invalid_username', password: 'secret' }
    const response = await axios.post('/auth/login', form).catch((e) => e.response.status)
    assert.deepEqual(401, response)
  })

  test('ensure auth return autheticated user if correct cretentials is provided', async (assert) => {
    const form = { uid: 'valid_username', password: 'secret' }
    const { data } = await axios.post('/auth/login', form)
    const { token, user } = data

    assert.containsAllKeys(data, ['token', 'user'])
    assert.containsAllKeys(token, ['token', 'type'])
    assert.containsAllKeys(user, ['id', 'email', 'username', 'avatar', 'firstName', 'surname'])
  })

  test('ensure return 401 error on logout if no token is provided', async (assert) => {
    const response = await axios.post('/auth/logout').catch((e) => e.response.status)
    assert.deepEqual(401, response)
  })

  test('ensure returns 204 on logout if token is provided', async (assert) => {
    const form = { uid: 'valid_username', password: 'secret' }
    const { data } = await axios.post('/auth/login', form)
    const { token } = data

    const { status } = await axios.post('/auth/logout', null, {
      headers: { Authorization: `${token.type} ${token.token}` },
    })

    assert.deepEqual(204, status)
  })
})

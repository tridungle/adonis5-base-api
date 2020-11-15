import axios from 'axios'
import test from 'japa'
import User from 'App/Models/User'
import Profile from 'App/Models/Profile'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/v1`
axios.defaults.baseURL = BASE_URL

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
    assert.containsAllKeys(user, ['email', 'username', 'avatar', 'firstName', 'surname'])
  })
})

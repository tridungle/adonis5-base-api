import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'Auth/AuthController.login')
  Route.post('/logout', 'Auth/AuthController.logout').middleware('auth')
}).prefix('/v1/auth')

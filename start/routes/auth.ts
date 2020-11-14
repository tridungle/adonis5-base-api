import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'Auth/AuthController.login')
}).prefix('/v1/auth')

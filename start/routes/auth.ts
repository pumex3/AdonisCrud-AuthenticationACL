import Route from '@ioc:Adonis/Core/Route'

//Grupo de Rotas
/*Route.group(() => {
  Route.post('/', 'AuthController.store')
  Route.delete('/', 'AuthController.destroy')
}).prefix('/auth')*/

Route.post('/auth', 'AuthController.store')
Route.delete('/auth', 'AuthController.destroy')

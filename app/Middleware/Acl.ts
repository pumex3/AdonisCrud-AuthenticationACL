import { Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle ({auth, response}: HttpContextContract, next: () => any, allowedRoles: any) {
    const user = await auth.authenticate()

    if(!allowedRoles.includes(user.role)){
      return response.unauthorized({error: {message:'acess denied'}})
    }
    await next()
  }
}

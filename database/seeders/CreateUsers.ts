import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsers extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'pedro_aleixo22@hotmail.com',
        password: '123',
        role: 'admin',
      },

      {
        email: 'arthur@hotmail.com',
        password: '123',
        role: 'normal',
      },
    ])
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'
//import Database from '@ioc:Adonis/Lucid/Database'

export default class PostsController {
  public async index ({ }: HttpContextContract) {
    const posts = await Post.all()
    return posts
  }

  //public async create ({}: HttpContextContract) {}

  public async store ({ request }: HttpContextContract) {
    const {title, content } = await request.validate(PostValidator)
    const post = await Post.create({title,content})

    return post
  }

  public async show ({ params }: HttpContextContract) {
    //const post = Database.rawQuery(`select * from posts  where id =  ${params.id} `)
    const post = await Post.findOrFail(params.id)

    return post
  }

  //public async edit ({ }: HttpContextContract) { }

  public async update ({params,request}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = request.only(['title', 'content'])

    post.merge(data)

    await post.save()
    return post
  }
  public async destroy ({params}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const msg = 'Deletado com sucesso'
    await post.delete()
    return msg
  }
}

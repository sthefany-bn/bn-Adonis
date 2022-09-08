import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FilmesController {
    public async index({ }: HttpContextContract) {
        const filme = await filme.query().preload('user').orderBy('id')
        return filme
      }
    
      public async store({ request, auth }: HttpContextContract) {
        const data = await request.validate(FilmeValidator)
        const filme = await filme.create({ ...data, userId: auth.user?.id })
        return filme
      }
    
      public async show({ params, response }: HttpContextContract) {
        try {
          const filme = await filme.findOrFail(params.id)
          return filme
        } catch (error) {
          response.status(400).send("Filme não encontrada!!!")
        }
      }
    
      public async update({ request, params, response }: HttpContextContract) {
        const { title, filme } = await request.validate(filmeValidator)
        try {
          const filme = await filme.findOrFail(params.id)
          filme.title = title
          filme.filme = filme
          await filme.save()
          return filme
    
        } catch (error) {
          response.status(400).send("Filme não encontrada!!!")
        }
      }
    
      public async destroy({ params, response }: HttpContextContract) {
        try {
          const filme = await filme.findOrFail(params.id)
          await filme.delete()
          return filme
        } catch (error) {
          response.status(400).send("Filme não encontrada!!!")
        }
      }
}

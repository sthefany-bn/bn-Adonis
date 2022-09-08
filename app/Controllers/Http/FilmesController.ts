import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Filme from 'App/Models/Filme'

export default class FilmesController {
  public async index({ }: HttpContextContract) {
    const filme = await Filme.all()
    return filme
  }
    
  public async store({ request }: HttpContextContract) {
    const data = await request.validate(FilmeValidator)
    const filme = await Filme.create({ ...data })
    return filme
  }
    
  public async show({ params, response }: HttpContextContract) {
    try {
      const filme = await Filme.findOrFail(params.id)
      return filme
    } catch (error) {
      response.status(400).send("Filme não encontrada!!!")
    }
  }
    
  public async update({ request, params, response }: HttpContextContract) {
    const { titulo, ano, mensagem  } = await request.validate(FilmeValidator)
    try {
      const filme = await Filme.findOrFail(params.id)
      filme.titulo = titulo
      filme.ano = ano
      filme.mensagem = mensagem
      await filme.save()
      return filme

    } catch (error) {
      response.status(400).send("Filme não encontrada!!!")
    }
  }
    
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const filme = await Filme.findOrFail(params.id)
      await filme.delete()
      return filme
    } catch (error) {
      response.status(400).send("Filme não encontrada!!!")
    }
  }
}

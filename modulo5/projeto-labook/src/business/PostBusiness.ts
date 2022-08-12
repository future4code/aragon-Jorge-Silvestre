import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, IGetPostsDBDTO, IGetPostsInputDTO, IGetPostsOutputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input: ICreatePostInputDTO) => {
        const {token, content} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        if(!content) {
            throw new Error("Parâmetro 'content' faltando");
        }

        if(typeof content !== "string") {
            throw new Error("Parâmetro 'content' deve ser uma string");
        }

        if (content.length < 1) {
            throw new Error("Parâmetro 'content' deve possuir no minimo 1 caractere");
        }

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            content,
            payload.id
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso"
        }

        return response
    }

    public getPosts = async (input: IGetPostsInputDTO) => {
        const token = input.token
        const search = input.search || ""
        const order = input.order || "content"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new Error("Token inválido ou faltando");
        }

        const getPostsInputDB: IGetPostsDBDTO = {
            search,
            order,
            sort,
            limit, 
            offset
        }

        const postsDB = await this.postDatabase.getPosts(getPostsInputDB)

        const posts = postsDB.map((postDB) => {
            const post = new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
            )

            return post
        })

        const response: IGetPostsOutputDTO = {
            posts
        }

        return response
    }

}
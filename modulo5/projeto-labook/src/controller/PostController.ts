import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try {
            
            const input: ICreatePostInputDTO = {
                token: req.headers.authorization,
                content: req.body.content
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: IGetPostsInputDTO = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.postBusiness.getPosts(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    public deletePost = async (req: Request, res: Response) => {
        try {
            const input: IDeletePostInputDTO = {
                token: req.headers.authorization,
                postId: req.params.id 
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    public likePost = async (req: Request, res: Response) => {
        try {
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

}
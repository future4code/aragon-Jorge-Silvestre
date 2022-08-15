import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const search = req.query.search as string
            const sort = req.query.sort as string || "updated_at"
            const order = req.query.order as string || "asc"
            const limit = Number(req.query.limit) || 8
            const page = Number(req.query.page) || 1
            const offset = limit * (page - 1)

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes(
                search,
                sort,
                order,
                limit,
                offset
            )

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            }) 

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public RegisterNewRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const title = req.body.title
            const description = req.body.description
            const creatorId = req.params.creatorId

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido");
            }

            if(!title || !description) {
                errorCode = 401
                throw new Error("Parâmetros faltando");
            }

            if(typeof title !== "string") {
                throw new Error("Parâmetro 'title' deve ser uma string");
            }

            if(typeof description !== "string") {
                throw new Error("Parâmetro 'description' deve ser uma string");
            }

            if(title.length < 3) {
                throw new Error("O parâmetro 'title' deve possuir ao menos 3 caracteres");
            }

            if(description.length < 10) {
                throw new Error("O parâmetro 'description' deve possuir ao menos 10 caracteres");
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const recipe = new Recipe(
                id,
                title,
                description,
                new Date(),
                new Date(),
                creatorId
            )

            const recipeDatabase = new RecipeDatabase()
            await recipeDatabase.createRecipe(recipe)

            res.status(200).send({
                message: "Receita cadastrada com sucesso",
                recipe
            })


        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const recipeId = req.params.recipeId
            const title = req.body.title 
            const description = req.body.description

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido");
            }

            if(!title || !description) {
                errorCode = 401
                throw new Error("Parâmetros faltando");
            }

            if(typeof title !== "string") {
                throw new Error("Parâmetro 'title' deve ser uma string");
            }

            if(typeof description !== "string") {
                throw new Error("Parâmetro 'description' deve ser uma string");   
            }

            if(title.length < 3) {
                throw new Error("O parâmetro 'title' deve possuir ao menos 3 caracteres");
            }

            if(description.length < 10) {
                throw new Error("O parâmetro 'description' deve possuir ao menos 10 caracteres");
            }

            const recipeDatabase = new RecipeDatabase()

            const recipeDB = await recipeDatabase.findById(recipeId)
            if (!recipeDB) {
                errorCode = 401
                throw new Error("Id da receita a ser editada inválida");
            }

            if(payload.role === USER_ROLES.NORMAL) {
                if(payload.id !== recipeDB.creator_id) {
                    errorCode = 403
                    throw new Error("Somente admins podem alterar outras receitas além da própria");
                }
            }

            const recipe = new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.created_at,
                new Date(),
                recipeDB.creator_id
            )

            title && recipe.setTitle(title)
            description && recipe.setDescription(description)


            await recipeDatabase.editRecipe(recipe)

            res.status(200).send({
                message: "Edicão realizada com sucesso",
                recipe
            })
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    public deleteRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const recipeId = req.params.recipeId

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido");
            }

            const recipeDatabase = new RecipeDatabase()
            
            const recipeDB = await recipeDatabase.findById(recipeId)
            if(!recipeDB) {
                errorCode = 401
                throw new Error("Id da receita a ser deletada inválida");               
            }

            if(payload.role === USER_ROLES.NORMAL) {
                if(payload.id !== recipeDB.creator_id) {
                    errorCode = 403
                    throw new Error("Somente admins podem deletar outras receitas além da própria");
                }
            }

            await recipeDatabase.deleteRecipe(recipeId)

            res.status(200).send({message: "Receita deletada com sucesso"})

        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    
}
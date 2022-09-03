import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateProductInputDTO, IGetProductsByIdInputDTO, IGetProductsByNameInputDTO } from "../models/Products";

export class ProductsController {
    constructor(
        private productsBusiness: ProductsBusiness
    ) { }

    public createProduct = async (req: Request, res: Response) => {
        try {
            const input: ICreateProductInputDTO = {
                token: req.headers.authorization,
                name: req.body.name
            }

            const response = await this.productsBusiness.createProduct(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao cadastrar produto" })
        }
    }

    public getProductsById = async (req: Request, res: Response) => {
        try {

            const input: IGetProductsByIdInputDTO = {
                productId: req.params.productId
            }
        

            const response = await this.productsBusiness.getProductsById(input)
            res.status(200).send(response)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar produtos por Id" })
        }
    }

    public getProductsByName = async (req: Request, res: Response) => {
        try {
            const input: IGetProductsByNameInputDTO = {
                search: req.query.search as string
            }

            const response = await this.productsBusiness.getProductsByName(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar produtos pelo nome" })
        }
    }




}
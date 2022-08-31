import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateProductInputDTO, IGetProductsInputDTO } from "../models/Products";

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

    public getProducts = async (req: Request, res: Response) => {
        try {
            const input: IGetProductsInputDTO = {
                search: req.query.search as string
            }

            const response = await this.productsBusiness.getProducts(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar produtos" })
        }
    }


}
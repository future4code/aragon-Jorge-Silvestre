import { ProductsDatabase } from "../database/ProductsDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, IGetProductsInputDTO, IGetProductsOutputDTO, Products } from "../models/Products"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ProductsBusiness {
    constructor(
        private productsDatabase: ProductsDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public createProduct = async (input: ICreateProductInputDTO): Promise<ICreateProductOutputDTO> => {
        const { token, name } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Token inválido ou faltando");
        }

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string");
        }

        if (name.length < 1) {
            throw new RequestError("Parâmetro 'name' inválido: mínimo de 1 caracter");
        }

        const product = new Products(
            this.idGenerator.generate(),
            name
        )

        await this.productsDatabase.createProduct(product)

        const response: ICreateProductOutputDTO = {
            message: "Produto cadastrado com sucesso",
            product
        }

        return response

    }

    public getProducts = async (input: IGetProductsInputDTO) => {
        const search = input.search || ""

        const productsDB = await this.productsDatabase.getProducts(search)

        const products = productsDB.map((productDB) => {
            return new Products(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products) {
            const tags = []

            const productId = product.getId()
            const tagsId = await this.productsDatabase.getTagsId(productId)

            for (let tag of tagsId) {
                tags.push(tag.name)
            }


            product.setTags(tags)
            console.log(product)
        }

        
        const response: IGetProductsOutputDTO = {
            products
        }

        return response
    }

}
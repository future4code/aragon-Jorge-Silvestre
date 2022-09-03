import { IProductsDB, Products } from "../models/Products"
import { BaseDatabase } from "./BaseDatabase"

export class ProductsDatabase extends BaseDatabase {
    public static TABLE_Products = "Case1_Products"
    public static TABLE_TAGS_PRODUCTS = "Case1_TagsProducts"
    public static TABLE_TAGS = "Case1_Tags"

    public toProductDBModel = (product: Products): IProductsDB => {
        const productsDB: IProductsDB = {
            id: product.getId(),
            name: product.getName()
        }

        return productsDB
    }
    

    public createProduct = async (product: Products): Promise<void> => {
        const productsDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductsDatabase.TABLE_Products)
            .insert(productsDB)
    }

    public getProductById = async (productId: string) => {
        const productDB = await BaseDatabase
        .connection(ProductsDatabase.TABLE_Products)
        .select()
        .where("id", "=", `${productId}`)

        return productDB
    }

    public getProductsByName = async (search: string) => {
        const productsDB = await BaseDatabase
        .connection(ProductsDatabase.TABLE_Products)
        .select()
        .where("name", "LIKE", `%${search}%`)

        return productsDB
    }

    public getTagsId = async (productId: string) => {
        // const result: any = await BaseDatabase
        //     .connection(ProductsDatabase.TABLE_TAGS_PRODUCTS)
        //     .select("tag_id")
        //     .where({ product_id: productId})

        // return result[0]

        const result = await BaseDatabase.connection.raw(`
            SELECT Case1_Tags.name
            FROM Case1_TagsProducts
            JOIN Case1_Tags
            ON Case1_TagsProducts.tag_id = Case1_Tags.id
            WHERE Case1_TagsProducts.product_id = ${productId};
        `)

        return result[0]
    }

    
}
export interface IProductsDB {
    id: string,
    name: string
}

export interface ITagsDB {
    id: string,
    name: string
}

export interface ITagsProductsDB {
    id: string,
    product_id: string,
    tag_id: string
}

export class Products {
    constructor(
        private id: string,
        private name: string,
        private tags: string[] = []
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTags = (newTag: string[]) => {
        this.tags = newTag
    }
}

export interface ICreateProductInputDTO {
    token: string,
    name: string
}

export interface ICreateProductOutputDTO {
    message: string,
    product: Products
}

export interface IGetProductsByIdInputDTO {
    productId: string
}

export interface IGetProductsByNameInputDTO {
    search: string
}

export interface IGetProductsByNameOutputDTO {
    products: Products[]
}

export interface IGetProductsByTagInputDTO {
    search: string
}

import { BaseDatabase } from "../../src/database/BaseDatabase"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_Products = "Case1_Products"
    public static TABLE_TAGS_PRODUCTS = "Case1_TagsProducts"
    public static TABLE_TAGS = "Case1_Tags"

}
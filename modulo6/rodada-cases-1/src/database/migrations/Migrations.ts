import { BaseDatabase } from "../BaseDatabase"
import { ProductsDatabase } from "../ProductsDatabase"
import { UserDatabase } from "../UserDatabase"
import { products, tagsDB, tagsProducts, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        
        DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_TAGS_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_Products};
        DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_TAGS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_Products}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_TAGS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_TAGS_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            product_id VARCHAR(255) NOT NULL,
            tag_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES ${ProductsDatabase.TABLE_Products}(id),
            FOREIGN KEY (tag_id) REFERENCES ${ProductsDatabase.TABLE_TAGS}(id)
        );


        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(ProductsDatabase.TABLE_Products)
            .insert(products)

        await BaseDatabase
            .connection(ProductsDatabase.TABLE_TAGS)
            .insert(tagsDB)

        await BaseDatabase
            .connection(ProductsDatabase.TABLE_TAGS_PRODUCTS)
            .insert(tagsProducts)
    }
}

const migrations = new Migrations()
migrations.execute()
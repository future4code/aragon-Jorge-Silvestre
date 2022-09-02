import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "jorge",
            email: "jorge@gmail.com",
            password: "abc123"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Cadastro realizado com sucesso")
        expect(response.token).toEqual("token-mock")
    })

    test("deve retornar erro caso nome seja uma string vazia", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "",
                email: "astrodev@gmail.com",
                password: "bananinha"
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("deve retornar erro caso a senha tenha menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "Astrodev",
                email: "astrodev@gmail.com",
                password: "banan"
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }

    })

    test("deve retornar erro caso passe um email com formato inválido", async () => {
        expect.assertions(2)
        
        try {
            const input: ISignupInputDTO = {
                name: "Astrodev",
                email: "astrodev.com",
                password: "bananinha"
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }
        }
    })

    test("deve retornar erro caso passe um email que ja foi cadastrado", async () => {
        expect.assertions(2)
        
        try {
            const input: ISignupInputDTO = {
                name: "Astrodev",
                email: "astrodev@gmail.com",
                password: "bananinha"
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("Email já cadastrado")
            }
        }
    })
}) 
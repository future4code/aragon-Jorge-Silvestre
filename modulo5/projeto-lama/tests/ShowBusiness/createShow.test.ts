import { ShowBusiness } from "../../src/business/ShowBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ICreateShowInputDTO } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe("testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("createShow bem sucedido", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-astrodev",
            band: "CPM22",
            startsAt: "2022/12/06"
        }

        const response = await showBusiness.createShow(input)

        expect(response.message).toEqual("Show criado com sucesso")
        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("CPM22")
        expect(response.show.getStartsAt()).toEqual(new Date("2022/12/06"))
    })

    test("deve retornar erro caso o usuario não esteja autenticado", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "",
                band: "The Police",
                startsAt: "2022/12/07"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("deve retornar um erro caso um usuario que não seja admin tenta acessar esse endpoint", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock",
                band: "Metalica",
                startsAt: "2022/12/08"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(403)
                expect(error.message).toEqual("Sem autorização")
            }
        }
    })

    test("deve retornar um erro caso tente passar o parametro 'band' vazio", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-astrodev",
                band: "",
                startsAt: "2022/12/09"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'band' inválido: mínimo de 1 caracteres")
            }
        }
    })
})
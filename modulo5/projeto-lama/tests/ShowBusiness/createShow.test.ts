import { ShowBusiness } from "../../src/business/ShowBusiness"
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
        expect(response.show.getStartsAt()).toEqual("2022/12/06")
    })
})
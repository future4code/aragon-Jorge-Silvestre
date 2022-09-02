import { ShowDatabase } from "../database/ShowDatabase"
import { ForbiddenError } from "../errors/ForbiddenError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowsDBDTO, IGetShowsInputDTO, IGetShowsOutputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) => {
        const {token, band, startsAt} = input

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new UnauthorizedError("Não autenticado");
        }

        if(payload.role !== USER_ROLES.ADMIN) {
            throw new ForbiddenError("Sem autorização");
        }

        if (typeof band !== "string") {
            throw new RequestError("Parâmetro 'band' inválido: deve ser uma string");
        }

        if(band.length < 1) {
            throw new RequestError("Parâmetro 'band' inválido: mínimo de 1 caracteres");
        }

        
        if (typeof startsAt !== "string") {
            throw new RequestError("Parâmetro 'startsAt' inválido: deve ser uma string");
        }

        if (startsAt < "2022/12/05") {
            throw new RequestError("Parâmetro 'startsAt' inválido: a data do show não pode ser anterior ao início do festival (5 de dezembro)");
        }

        const id = this.idGenerator.generate()

        const show = new Show(
            id,
            band,
            new Date(startsAt),
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso",
            show
        }

        return response
    }

    public getShows = async (input: IGetShowsInputDTO) => {
        const search = input.search || ""
        const order = input.order || "band"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

        const getShowsInputDB: IGetShowsDBDTO = {
            search,
            order,
            sort,
            limit, 
            offset
        }

        const showsDB = await this.showDatabase.getShows(getShowsInputDB)

        const response: IGetShowsOutputDTO = {
            showsDB
        }

        return response

    }

}
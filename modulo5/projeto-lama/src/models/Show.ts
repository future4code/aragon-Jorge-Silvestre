export interface IShowDB {
    id: string,
    band: string,
    starts_at: Date
}

export interface ITicketDB {
    id: string,
    show_id: string,
    user_id: string
}

export class Show {
    constructor(
        private id: string,
        private band: string,
        private startsAt: Date,
        private tickets: number = 5000
    ) { }

    public getId = () => {
        return this.id
    }

    public getBand = () => {
        return this.band
    }

    public getStartsAt = () => {
        return this.startsAt
    }

    public getTickets = () => {
        return this.tickets
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setBand = (newBand: string) => {
        this.band = newBand
    }

    public setStartsAt = (newStartsAt: Date) => {
        this.startsAt = newStartsAt
    }

    public setTickets = (newTickets: number) => {
        this.tickets = newTickets
    }
}

export interface ICreateShowInputDTO {
    token: string,
    band: string,
    startsAt: string
}

export interface ICreateShowOutputDTO {
    message: string,
    show: Show
}

export interface IGetShowsInputDTO {
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetShowsDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IGetShowsOutputDTO {
    showsDB: IShowDB[]
}
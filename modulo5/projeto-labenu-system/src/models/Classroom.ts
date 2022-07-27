enum MODULE {
    ZERO = "0",
    UM = "1",
    DOIS = "2",
    TRES = "3", 
    QUATRO = "4",
    CINCO = "5",
    SEIS = "6"
}


export interface IClassroomDB {
    id: string,
    name: string,
    module: MODULE 
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private students: string[],
        private module: MODULE 
    ) {}
}
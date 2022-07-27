export interface IStudentDB {
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    classroomId: null | string
}

export interface IHobbiesDB {
    id: string,
    title: string
}

export interface IStudentsHobbiesDB {
    studentId: string,
    hobbyId: string
}

export class Student {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: Date, 
        private classroomId: null | string,
        private hobbies: string[]
    ) {}
}
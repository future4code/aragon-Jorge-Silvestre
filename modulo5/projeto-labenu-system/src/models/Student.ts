export interface IStudentDB {
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    classroom_id: null | string
}

export interface IHobbiesDB {
    id: string,
    title: string
}

export interface IStudentsHobbiesDB {
    student_id: string,
    hobby_id: string
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

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getBirthdate() {
        return this.birthdate
    }

    public getClassroomId() {
        return this.classroomId
    }

    public getHobbies() {
        return this.hobbies
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setBirthdate(newBirthdate: Date) {
        this.birthdate = newBirthdate
    }

    public setClassroomId(newClassroomId: null | string) {
        this.classroomId = newClassroomId
    }

    public setHobbies(newHobbies: string[]) {
        this.hobbies = [...newHobbies]
    }
}
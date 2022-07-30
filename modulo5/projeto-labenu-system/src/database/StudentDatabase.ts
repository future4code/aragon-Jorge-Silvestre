import { IStudentDB } from "../models/Student";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

    public async createStudent(student: IStudentDB) {
        await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .insert(student)
    }

    public async getStudentByName(name: string) {
        const result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select()
        .where("name", "LIKE", `%${name}%`)

        return result
    }

    public async getAllStudents() {
        const  result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select()

        return result
    }

    public async editClassStudent(studentId: string, newClassroom: string) {
        await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .update({classroom_id: newClassroom})
        .where({id: studentId})
    }
}
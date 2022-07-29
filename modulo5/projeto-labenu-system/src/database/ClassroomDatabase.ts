import { Classroom } from "../models/Classroom";
import { BaseDatabase } from "./BaseDatabase";

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms() {
        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select()

        return result
    }

    public async createClassroom(classroom: Classroom) {
        await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .insert(classroom)
    }

    public async getActiveClassrooms() {
        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select()
        .where("module", "!=", "0")

        return result
    }

    public async updateModuleClassroom(classroomId: string, module:string) {
        await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .update({module})
        .where({id: classroomId})
    }
}
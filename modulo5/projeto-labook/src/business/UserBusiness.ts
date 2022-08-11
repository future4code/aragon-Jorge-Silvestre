import { UserDatabase } from "../database/UserDatabase"
import { ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: ISignupInputDTO) => {
        const {name, email, password} = input

        if(!name || !email || !password) {
            throw new Error("Um ou mais parâmetros faltando");
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Parâmetro 'name' inválido");
        }

        if(typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido");
        }

        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido");
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro password inválido");
        }
        
        const userDB = await this.userDatabase.findByEmail(email)

        if(userDB) {
            throw new Error("E-mail já cadastrado");
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    }


}
import { BaseError } from "./BaseError";

export class ForbiddenError extends BaseError {
    constructor(
        message: string = "Acesso negado"
    ) {
        super(403, message)
    }
}
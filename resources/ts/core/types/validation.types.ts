export namespace Validation {
    export type Errors = {
        [key: string]: string[];
    }

    export type Error = {
        fieldName: string,
        message: string,
    }
}

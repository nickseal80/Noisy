export namespace Models {
    export interface User {
        id: number,
        name: string,
        email: string,
        email_verified_at: string,
        created_at: string,
        updated_at: string,
    }

    export interface UserData {
        user: User,
        accessToken: string,
    }
}

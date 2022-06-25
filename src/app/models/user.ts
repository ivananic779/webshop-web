export class User {
    id: number = 0;
    username: string;
    password: string;
    confirm_password?: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    role_id?: number;
    email: string;
    language_id: number;
}
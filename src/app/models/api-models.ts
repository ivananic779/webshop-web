import { SelectItem } from "primeng/api";

export class APIResponse<T> {
    status: string;
    message: string;
    data: T;
}

/**
 * USER
 */
export class User {
    id: number;
    username: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    password?: string;
    confirm_password?: string;
    role_id: number;
    email: string;
    language_id: number;

    role?: Role;
}

export class Role {
    id: number;
    name: string;
    description: string;
}

/**
 * LANGUAGE
 */
export class Language {
    id: number;
    name: string;

    public static makeSelectItem(languages: Language[]): SelectItem[] {
        const result: SelectItem[] = [];

        languages.forEach(language => {
            result.push({
                label: language.name,
                value: language.id,
            });
        });

        return result;
    }
}

/**
 * LOGIN
 */
export class Login {
    token: string;
    role_name: string;
}
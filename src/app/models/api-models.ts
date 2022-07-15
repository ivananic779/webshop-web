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
    id: number = 0; 
    username: string = "";
    first_name?: string = "";
    last_name?: string = "";
    company_name?: string = "";
    password?: string = "";
    confirm_password?: string = "";
    role_id: number = 0;
    role_name: string = "";
    role_description?: string = "";
    email: string = "";
    language_id: number = 1; // 1 is default language (ENU)
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
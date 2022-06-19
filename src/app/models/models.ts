import { SelectItem } from "primeng/api";

export interface APIResponse<T> {
    status: string;
    message: string;
    data: T;
}

/**
 * USER
 */
export interface User {
    id: number;
    username: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    email: string;
    language_id: number;
}

export interface Users {
    users: User[];
}

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

export interface Language {
    id: number;
    name: string;
}

export interface Languages {
    languages: Language[];
}

export class Language {
    id: number;
    name: string;
    country?: string;

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
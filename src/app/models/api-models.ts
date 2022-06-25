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

/**
 * LANGUAGE
 */
export interface Language {
    id: number;
    name: string;
}

export interface Languages {
    languages: Language[];
}

/**
 * LOGIN
 */
export interface Login {
    token: string;
}
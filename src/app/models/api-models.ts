export interface APIResponse<T> {
    status: string;
    msg: string;
    data: T;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface Users {
    users: User[];
}
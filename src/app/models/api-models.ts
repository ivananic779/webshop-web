export interface IAPIResponse<T> {
    status: string;
    data: T;
}

export class APIResponse<T> implements IAPIResponse<T> {
    status: string;
    data: T;
}
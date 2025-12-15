export interface IAPIEndpoints<T> {
    success: boolean;
    data?: T;
    statuscode: number;
    message: string;
    error?: string;
}

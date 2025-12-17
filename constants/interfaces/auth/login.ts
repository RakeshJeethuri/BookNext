export interface ILoginPayload {
    email: string;
    password: string;
}
export interface ILoginResponse {
    id: string; 
    email: string;
    username: string;
    token?: string;
}
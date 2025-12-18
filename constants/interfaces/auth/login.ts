export interface ILoginPayload {
    email: string;
    password: string;
}
export interface ILoginResponse {
    id: string; 
    email: string;
    name: string;
    token: string;
}
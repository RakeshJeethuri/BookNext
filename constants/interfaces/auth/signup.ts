export interface ISignupPayload {
    email: string;
    name: string;
    password: string;
}
export interface ISignupResponse {
    id: string; 
    email: string;
    name: string;
    token?: string;
}
export interface ISignupPayload {
    email: string;
    username: string;
    password: string;
}
export interface ISignupResponse {
    id: string; 
    email: string;
    username: string;
    token?: string;
}
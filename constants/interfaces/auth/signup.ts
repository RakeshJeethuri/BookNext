export interface ISignupPayload {
    email: string;
    name?: string;
    password?: string;
    provider: 'auth' | 'google';
    token?: string;
}
export interface ISignupResponse {
    id: string; 
    email: string;
    name: string;
    token: string;
}
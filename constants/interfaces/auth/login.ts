export interface ILoginPayload {
    email: string;
    password: string;
    provider: 'auth' | 'google';
    token?: string;
    
}
export interface ILoginResponse {
    id: string; 
    email: string;
    name: string;
    token: string;
}
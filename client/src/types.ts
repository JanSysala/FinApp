export interface User {
    id: string | null;
    token: string | null;
    avatar: string | null;
    didRequest: boolean;
}
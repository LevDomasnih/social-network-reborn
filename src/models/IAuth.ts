export interface IAuth {
    id: string
    firstName: string;
    lastName: string;
    login: string
    email: string;
    avatar: string | null;
    notifications: number | null;
}

import { User } from "../entities/User";

export interface IUserService {
    createUser(name: string, email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
}

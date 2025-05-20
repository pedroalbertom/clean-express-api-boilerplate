import { User } from "../entities/User";

export interface IUserRepository {
    save(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}


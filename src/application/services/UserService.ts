import { CreateUserInput, UserOutput, UserListOutput } from "../../application/dtos/User";
import { isValidEmail } from "../../shared/utils/Email";
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async createUser(data: CreateUserInput): Promise<UserOutput> {
        if (!data.name || !data.email) throw new Error("Name and email are required");
        if (!isValidEmail(data.email)) throw new Error("Invalid email format");

        const existingUser = await this.userRepository.findByEmail(data.email);
        if (existingUser) throw new Error("Email already in use");

        const user = new User(0, data.name, data.email);

        const saved = await this.userRepository.save(user);

        return {
            id: saved.id,
            name: saved.name,
            email: saved.email,
        };
    }

    async getAllUsers(): Promise<UserListOutput> {
        const users = await this.userRepository.findAll();

        const userList: UserOutput[] = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }));

        return { users: userList };
    }

    async getUserById(id: number): Promise<UserOutput | null> {
        if (!Number.isInteger(id) || id <= 0) throw new Error("Invalid user ID");

        const user = await this.userRepository.findById(id);
        return user ? {
            id: user.id,
            name: user.name,
            email: user.email,
        } : null;
    }

    async getUserByEmail(email: string): Promise<UserOutput | null> {
        if (!email) throw new Error("Email is required");
        if (!isValidEmail(email)) throw new Error("Invalid email format");

        const user = await this.userRepository.findByEmail(email);
        return user ? {
            id: user.id,
            name: user.name,
            email: user.email,
        } : null;
    }
}

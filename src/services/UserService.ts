import { IUserService } from "./IUserService";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async createUser(name: string, email: string): Promise<User> {
        if (!name || !email) throw new Error("Name and email are required");

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) throw new Error("Email already in use");

        const user = new User(name, email);
        return await this.userRepository.save(user);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.userRepository.findById(id);
    }
}

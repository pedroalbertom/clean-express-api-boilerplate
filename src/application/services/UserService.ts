import {
    CreateUserInput,
    UpdateUserInput,
    UserListOutput,
    UserOutput,
} from "../../application/dtos/User";
import { isValidEmail } from "../../shared/utils/Email";
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IUserService } from "./IUserService";
import { AppError } from "../../shared/errors/AppError";
import { NotFoundError } from "../../shared/errors/NotFoundError";

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async createUser(data: CreateUserInput): Promise<UserOutput> {
        if (!data.name || !data.email)
            throw new AppError("Name and email are required", 400);

        if (!isValidEmail(data.email))
            throw new AppError("Invalid email format", 400);

        const existingUser = await this.userRepository.findByEmail(data.email);
        if (existingUser)
            throw new AppError("Email already in use", 409);

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
        if (!Number.isInteger(id) || id <= 0)
            throw new AppError("Invalid user ID", 400);

        const user = await this.userRepository.findById(id);
        if (!user) throw new NotFoundError("User not found");

        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    }

    async updateUser(id: number, data: UpdateUserInput): Promise<UserOutput> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new NotFoundError("User not found");

        if (data.email && !isValidEmail(data.email)) {
            throw new AppError("Invalid email format", 400);
        }

        user.name = data.name ?? user.name;
        user.email = data.email ?? user.email;

        const updated = await this.userRepository.save(user);

        return {
            id: updated.id,
            name: updated.name,
            email: updated.email,
        };
    }

    async deleteUser(id: number): Promise<void> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new NotFoundError("User not found");

        await this.userRepository.delete(id);
    }
}

// File: src/services/UserService.ts
// Description: This file contains the implementation of the UserService class, which handles user-related business logic.
// It interacts with the IUserRepository interface to perform CRUD operations on user data.
// It includes methods for creating a user, getting all users, getting a user by ID, and getting a user by email.

import { IUserService } from "./IUserService";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { isValidEmail } from "../shared/utils/Email";

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async createUser(name: string, email: string): Promise<User> {
        if (!name || !email) throw new Error("Name and email are required");
        if (!isValidEmail(email)) throw new Error("Invalid email format");

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) throw new Error("Email already in use");

        const user = new User(name, email);
        return this.userRepository.save(user);
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async getUserById(id: number): Promise<User | null> {
        if (!Number.isInteger(id) || id <= 0) throw new Error("Invalid user ID");
        return this.userRepository.findById(id);
    }

    async getUserByEmail(email: string): Promise<User | null> {
        if (!email) throw new Error("Email is required");
        if (!isValidEmail(email)) throw new Error("Invalid email format");

        return this.userRepository.findByEmail(email);
    }
}

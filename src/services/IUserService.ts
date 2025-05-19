// File: src/services/IUserService.ts
// Description: This file defines the IUserService interface, which outlines the methods for user-related operations.
// It includes methods for creating a user, getting all users, getting a user by ID, and getting a user by email.
// This interface is implemented by the UserService class, which contains the business logic for user operations.
// It is used to decouple the service layer from the controller layer, allowing for better separation of concerns and easier testing.

import { User } from "../entities/User";

export interface IUserService {
    createUser(name: string, email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}

import { CreateUserInput, UserListOutput, UserOutput } from "../../application/dtos/User";

export interface IUserService {
    createUser(data: CreateUserInput): Promise<UserOutput>;
    getAllUsers(): Promise<UserListOutput>;
    getUserById(id: number): Promise<UserOutput | null>;
    getUserByEmail(email: string): Promise<UserOutput | null>;
}

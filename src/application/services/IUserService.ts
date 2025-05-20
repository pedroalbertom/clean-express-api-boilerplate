import {
  CreateUserInput,
  UpdateUserInput,
  UserListOutput,
  UserOutput,
} from "../../application/dtos/User";

export interface IUserService {
  createUser(data: CreateUserInput): Promise<UserOutput>;
  getAllUsers(): Promise<UserListOutput>;
  getUserById(id: number): Promise<UserOutput | null>;
  updateUser(id: number, data: UpdateUserInput): Promise<UserOutput>;
  deleteUser(id: number): Promise<void>;
}

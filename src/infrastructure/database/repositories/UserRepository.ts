import { Repository } from "typeorm";
import { AppDataSource } from "../../../config/DataSource";
import { UserEntity } from "../entities/UserEntity";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { User } from "../../../domain/entities/User";

export class UserRepository implements IUserRepository {
    private repo: Repository<UserEntity>;

    constructor() {
        this.repo = AppDataSource.getRepository(UserEntity);
    }

    async save(user: User): Promise<User> {
        const entity = this.toEntity(user);
        const saved = await this.repo.save(entity);
        return this.toDomain(saved);
    }

    async findAll(): Promise<User[]> {
        const users = await this.repo.find();
        return users.map(this.toDomain);
    }

    async findById(id: number): Promise<User | null> {
        const user = await this.repo.findOneBy({ id });
        return user ? this.toDomain(user) : null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.repo.findOneBy({ email });
        return user ? this.toDomain(user) : null;
    }

    private toDomain(entity: UserEntity): User {
        return new User(entity.id, entity.name, entity.email);
    }

    private toEntity(user: User): UserEntity {
        const entity = new UserEntity();
        entity.id = user.id;
        entity.name = user.name;
        entity.email = user.email;
        return entity;
    }
}

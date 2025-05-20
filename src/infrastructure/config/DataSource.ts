import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../infrastructure/database/entities/UserEntity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    migrations: [],
    subscribers: [],
});

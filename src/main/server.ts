import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "../config/DataSource";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("✅ Database connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Database connection error:", err);
    });

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import UserRoutes from "../interface/routes/UserRoutes";
import { errorHandler } from "../shared/middlewares/ErrorHandler";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", UserRoutes);

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use(errorHandler);

export default app;

import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    console.error(err);

    if (err.name === "QueryFailedError") {
        return res.status(400).json({ error: "Database query failed" });
    }

    if (err.message) {
        return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({ error: "Internal Server Error" });
}

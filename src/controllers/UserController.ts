import { Request, Response } from "express";
import { IUserService } from "../services/IUserService";

export class UserController {
    constructor(private userService: IUserService) { }

    async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email } = req.body;
            const user = await this.userService.createUser(name, email);
            return res.status(201).json(user);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAllUsers(_req: Request, res: Response): Promise<Response> {
        const users = await this.userService.getAllUsers();
        return res.status(200).json(users);
    }
}

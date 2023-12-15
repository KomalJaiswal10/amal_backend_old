import { NextFunction, Request, Response } from "express"

import { InferAttributes } from "sequelize";
import userService from "../service/user";
import UserModel from "../models/user";


class UserController {

    public create = async (req: Request, res: Response, next: NextFunction) => {

        const isExist = await userService.findUser({ number: req.body.number });

        if (!isExist) {
            // const user: InferAttributes<UserModel> | null = await createK(UserModel, req.body);
            const user: InferAttributes<UserModel> | null = await userService.create(req.body);
            if (user)
                res.status(200).json({ data: user, message: 'User Created' });
        } else {
            next(res.status(400).json({ message: 'Account Already Exist' }));
        }
    }
    public findAll = async (req: Request, res: Response, next: NextFunction) => {

        const users = await userService.findAll();

        res.status(200).json({ data: users, message: 'User Found' });

    }
}


// class UserController implements BaseController{
//     create(): void {
//         throw new Error("Method not implemented.");
//     }


// }
// constructor(params) {

// }

export default new UserController;
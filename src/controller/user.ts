import { NextFunction, Request, Response } from "express"
import userService from '../service/user';
import { InferAttributes } from "sequelize";
import UserModel from "../models/user";

class UserController {

    public create = async (req: Request, res: Response, next: NextFunction) => {

        const searchId = req.body.email ? { email: req.body.email } : { number: req.body.number };

        const isExist = await userService.findUser(searchId);
        console.log(isExist);
        if (!isExist) {
            const user: InferAttributes<UserModel> | null = await userService.create(req.body);
            if (user)
                res.status(200).json({ data: user, message: 'User Created' });
        } else {
            next(res.status(400).json({ message: 'Account Already Exist' }));
        }
    }
}
// constructor(params) {
    
// }

export default new UserController;
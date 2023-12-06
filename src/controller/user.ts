import { NextFunction, Request, Response } from "express"

import { InferAttributes } from "sequelize";

import BaseController from "./base_controller";

// class UserController {

//     public create = async (req: Request, res: Response, next: NextFunction) => {

//         const isExist = await userService.findUser({ number: req.body.number });

//         if (!isExist) {
//             const user: InferAttributes<UserModel> | null = await userService.create(req.body);
//             if (user)
//                 res.status(200).json({ data: user, message: 'User Created' });
//         } else {
//             next(res.status(400).json({ message: 'Account Already Exist' }));
//         }
//     }
// }


class UserController implements BaseController{
    create(): void {
        throw new Error("Method not implemented.");
    }
   

}
// constructor(params) {
    
// }

export default new UserController;
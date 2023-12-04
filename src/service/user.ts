import { InferAttributes } from "sequelize";
import UserModel from "../models/user";

class UserService {

    create = async (payload: InferAttributes<UserModel>) => {

        console.log(`here`);
        return await UserModel.create(payload);
    }

    findUser = async (filter: any) => await UserModel.findOne({ where: filter });


}


export default new UserService;
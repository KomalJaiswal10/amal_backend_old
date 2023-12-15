import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

import DbOperations from "../interface/base_interface";
import UserModel from "../models/user";

class UserService {

    create = async (payload: InferCreationAttributes<UserModel>) => {

        console.log(`here`);
        return await UserModel.create(payload);
    }

    findUser = async (filter: any) => await UserModel.findOne({ where: filter });

    findAll = async (filter?: any) => await UserModel.findAll({ where: filter });


}

export default new UserService;






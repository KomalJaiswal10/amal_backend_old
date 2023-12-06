import { InferAttributes, InferCreationAttributes, Model } from "sequelize";
import DbOperations from "../interface/base_interface";
import { UserModel } from "../models/user";


class BaseService implements DbOperations<UserModel, InferCreationAttributes<UserModel>>{

    create(payload: any): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    update(filter: any, payload: InferCreationAttributes<UserModel, { omit: never; }>): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    findAll(filter: any): Promise<UserModel[]> {
        throw new Error("Method not implemented.");
    }
    findeOne(filter: any): Promise<UserModel | null> {
        throw new Error("Method not implemented.");
    }
    destroy(filter: any): Promise<UserModel | null> {
        throw new Error("Method not implemented.");
    }






   




}



export default new BaseService;
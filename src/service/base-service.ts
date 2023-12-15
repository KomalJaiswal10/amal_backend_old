import { Model } from "sequelize";
import UserModel from "../models/user";
import DbOperations from "../interface/base_interface";





interface test {
    user: UserModel
}




export async function createK(someEntity: any, payload: any): Promise<any> {
    
    let a = await someEntity.create(payload);
    return a;
}

class BaseService<T extends any> implements DbOperations<T>{


    create(payload: any): Promise<T> {
        payload.create();
        throw new Error("Method not implemented.");
    }
    update(filter: any, payload: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    findAll(filter: any): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findeOne(filter: any): Promise<T | null> {
        throw new Error("Method not implemented.");
    }
    destroy(filter: any): Promise<T | null> {
        throw new Error("Method not implemented.");
    }

    
}
















import { DataTypes } from "sequelize";


interface UserAttributes {
    id: string,
    name: string,
    email: string,
    phone: number,
    password: string,
    userName: string,
    isSuperAdmin: boolean,
    isAdmin: boolean,
    isUser: boolean,

}
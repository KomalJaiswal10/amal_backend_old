import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, UUIDV4 } from "sequelize";
import Sequelize from "sequelize";
import db from "../configs/database/db";
import bcrypt from "bcryptjs";


class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>{
    declare id: CreationOptional<string>;
    declare name: string;
    declare email: string;
    declare number: number;
    declare password: string;
    declare is_number_verified: boolean;
    declare is_super_admin: boolean;
    declare is_admin: boolean;
    declare is_user: boolean;
}

UserModel.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,

    },
    is_number_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    is_super_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    is_user: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
}, {
    sequelize: db,
    timestamps: true,
    tableName: 'users',
    freezeTableName: true
});

UserModel.beforeCreate(async (user) => {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
});

export default UserModel;
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    user_type: {
        type: DataTypes.ENUM('field_owner', 'player'),
        defaultValue: 'player',
    },
    profile_picture: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
}, {
    timestamps: true,
    underscored: true,
});

export { User };

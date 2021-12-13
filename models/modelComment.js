const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/sqlConnection');

class modelComment extends Model {}

modelComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commentText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: "modelPost",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'modelComment',
    }
);

module.exports = modelComment;
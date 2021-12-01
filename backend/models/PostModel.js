import { Sequelize } from "sequelize";
import db from '../config/db.js'

const { DataTypes } = Sequelize

const Posts = db.define('posts', {
    title: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    } 
},{
        freezeTableName: true
})

export default Posts;
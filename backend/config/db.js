import { Sequelize } from "sequelize"

const db = new Sequelize('auth_node', 'root', '',{
    host: "localhost",
    dialect: "mysql"
})

export default db;
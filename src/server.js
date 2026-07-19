import sequelize from "./config/database.js";
import express from "express"
import allRouter from "./routes/index.js";

async function startServer() {
    const app = express()
    app.use(express.json())
    app.use('/api', allRouter)
    try{
        await sequelize.authenticate()
        console.log("data base is conection")
        await sequelize.sync()
    }catch(aerr){
        console.log(aerr)
    }
    app.listen(20514, () => {
        console.log("server is conactd")
    })
}

startServer()
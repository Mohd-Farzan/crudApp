import express from "express"
import dbCon from "./utils/db.js"
import  dotenv  from "dotenv"
import cors from "cors"
import routers from "./routes/routes.js"
import path from "path"

dotenv.config()
dbCon()
const app=express()
const _dirname=path.resolve()
app.use(express.json())
app.use(cors())
app.use('/api',routers)
app.use(express.static(path.join(_dirname,"/Client/dist")))
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(_dirname,"Client","dist","index.html"))
})
app.listen(process.env.PORT,()=>{
console.log('server is running')
})
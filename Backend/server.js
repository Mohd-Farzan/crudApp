import express from "express"
import dbCon from "./utils/db.js"
import  dotenv  from "dotenv"
import cors from "cors"
import routers from "./routes/routes.js"

dotenv.config()
const app=express()


dbCon()
app.use(express.json())
app.use(cors())
app.use('/api',routers)
app.post('/api/register', (req, res) => {
    console.log(req.body); // Inspect the received data
    // Handle registration logic
  });
app.listen(process.env.PORT,()=>{
console.log('server is running')
})
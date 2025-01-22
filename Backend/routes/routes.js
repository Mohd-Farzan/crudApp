import express from 'express';
import { CreateUsers,getUsers,UpdateUsers,DeleteUser} from '../controller/UserController.js'; // Ensure you have the correct file path and extension
import {SignupUser,loginUser} from '../controller/signupController.js'

const routers = express.Router();

routers.post('/create', CreateUsers);
routers.get('/getUsers', getUsers);
routers.put('/update/:id',UpdateUsers);
routers.delete('/delete/:id',DeleteUser)
routers.post('/register',SignupUser)
routers.post('/login',loginUser)

export default routers; // Directly export the routers object

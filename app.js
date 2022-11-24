// const express = require('express')      old way of importing
import express from "express" // ES6 syntax of importing
import HelloController from "./controllers/hello-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import UserController from "./controllers/users/users-controller.js"
import cors from 'cors'



import mongoose from "mongoose";
const app = express()

const options = {
    family: 4 // Use IPv4, skip trying IPv6
}
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

app.use(cors())
// app.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)

app.listen(process.env.PORT || 4000);

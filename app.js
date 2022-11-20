// const express = require('express')      old way of importing
import express from "express" // ES6 syntax of importing
import HelloController from "./controllers/hello-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import UserController from "./controllers/users/users-controller.js"

import cors from 'cors'

const app = express()

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
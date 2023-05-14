import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
 const app:Application = express()

 //using cors
app.use(cors());

//application routes
import userRoute from './app/modules/user/user.route';

//parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get('/api/v1/user',userRoute )
app.use('/api/v1/user',userRoute )

export default app;
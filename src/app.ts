import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
 const app:Application = express()

 //using cors
app.use(cors());


//parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req:Request, res:Response, next:NextFunction) => {

  //for learning purpose
  //inserting data in mongodb
   /* steps:==============>>>>>>>>

        1.create a interface
        2.Make schema
        3.Create Model from Schema
        4.Database Query

    steps:==============>>>>>>>>
   */

    //code goes below this line

    //creating an interface
    interface IUser{
      id:number;
      role:string;
      password:string;
      name:{
        firstName:string,
        lastName:string,
      }
      dateOfBirth?:string;
      gender: "male"|"female";
      email?:string;
      contactNO:string;
      emergencyContact:string;
      presentAddress:string;
      permanentAddress:string;
    }

    //creating schema using above interface

    

    
    /* res.send('Hello World!')
    next(); */
  })

  export default app;
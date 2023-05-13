//creating schema using above interface

import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id:{type:Number, required:true,unique:false},
    role:{
      type:String, required:true
    },
    password:{type: String, required:true},
    name:{
      firstName:{type:String,required:true},
      lastName:{type: String, required:true},
    },
    dateOfBirth:{type:String,required:true},
    gender: {type:String, enum:["male","female"],required:true},
    email:{type:String},
    contactNO:{type:String,required:true},
    emergencyContact:{type:String,required:true},
    presentAddress:{type:String,required:true},
    permanentAddress:{type: String,required:true}
  })

  //creating model

 export const User = model<IUser>('User',userSchema)

 


  
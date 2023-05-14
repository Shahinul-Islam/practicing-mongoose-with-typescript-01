import { NextFunction,Request,Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.service";

export const createUser =async (req:Request, res:Response, next:NextFunction) => {

    const user = await createUserToDB();
    res.status(200).json({
        status:'success',
        data:user
    })

}
export const getUser =async (req:Request, res:Response, next:NextFunction) => {

    const user = await getUserFromDB();
    res.status(200).json({
        status:'success',
        data:user
    })

}
 
/*pattern========>>>>>>  */
/* 
route will call the controller and then controller will call the service
*/
/*pattern========>>>>>>  */
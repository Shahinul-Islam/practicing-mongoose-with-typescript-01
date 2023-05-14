import { User } from "./user.model";

export const createUserToDB =async ()=>{
    const user = await new User({
      id:4,
      role:"student",
      password:"nainai",
      name:{
        firstName:"asif",
        lastName:"islam",
      },
      dateOfBirth:"jun-01-1992",
      gender:"male",
      email:"shahinul78@gmail.com",
      contactNO:"01738374874",
      emergencyContact:"487587458784",
      presentAddress:"shalgaria",
      permanentAddress:"shalgaria",
    });
    await user.save();
    return (user);
  }

  export const getUserFromDB = async ()=>{
    const users = User.find();
    return users;
  }


  /*pattern========>>>>>>  */
/* 
route will call the controller and then controller will call the service
*/
/*pattern========>>>>>>  */
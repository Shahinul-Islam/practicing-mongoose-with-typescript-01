import { User } from "./user.model";

export const createUserToDB =async ()=>{
    const user = await new User({
      id:40,
      role:"student",
      password:"nainai",
      name:{
        firstName:"shakibul",
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
    console.log(user);
  }


  /*pattern========>>>>>>  */
/* 
route will call the controller and then controller will call the service
*/
/*pattern========>>>>>>  */
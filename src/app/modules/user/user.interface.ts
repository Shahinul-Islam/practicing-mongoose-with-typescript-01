//creating an interface
export interface IUser{
    id:number;
    role:"student";
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
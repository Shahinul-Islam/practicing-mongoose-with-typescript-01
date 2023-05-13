
import mongoose from "mongoose";
import  app  from "./app";
const port:number = 5000;
async function bootstrap() {

  try
  {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongose');
   app.listen(port, () => {
})
  }
  catch(err){
    console.log(err);
  }
  
}
bootstrap()



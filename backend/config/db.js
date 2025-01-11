import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://amannegi1240:vAenvfKOYyKbUasC@food-del.9b7hc.mongodb.net/?retryWrites=true&w=majority&appName=FOOD-DEL').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
import mongoose from 'mongoose';
let isConnected = false;//variable to check if mongoose is connected

export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true)
    if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');

    try {
       await mongoose.connect(process.env.MONGODB_URL)
       isConnected=true;
       console.log('Connected to Mongo DB');
       
    }catch(error){
         console.log(error)
    }

}

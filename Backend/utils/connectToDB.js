import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectToDB = () => {
  mongoose.connect(
    process.env.DB_URI, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
      
  return mongoose.connection;
}

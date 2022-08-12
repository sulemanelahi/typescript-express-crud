import mongoose from 'mongoose';
import { MONGO_URI } from './config';
// ------------------------------------

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI || '', {
      retryWrites: true,
      w: 'majority',
    });
    console.log(`mongo database is connected!!! ${conn.connection.host} `);
  } catch (error) {
    console.error(`Error: ${error} `);
    process.exit(1); //passing 1 - will exit the proccess with error
  }
};

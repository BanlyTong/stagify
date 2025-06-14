import { ConnectOptions, connect } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const options: ConnectOptions = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};

export async function connectDB() {
  try {
    console.log('\nConnecting database ...');
    await connect(process.env.MONGODB_URI || '', options);
    console.log('Database connected!');
  } catch (err) {
    console.log(err);
  }
}

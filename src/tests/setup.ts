import { connectDB } from '../libs/db';

export default async function setup() {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }
}

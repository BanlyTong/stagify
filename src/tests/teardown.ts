import { disconnect } from 'mongoose';

export default async function teardown() {
  try {
    await disconnect();
  } catch (err) {
    console.log(err);
  }
}

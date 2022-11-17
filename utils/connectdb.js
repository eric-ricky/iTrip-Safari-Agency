import mongoose from 'mongoose';

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) return;

  const db = await mongoose.connect(process.env.MONGO_URI);
  console.log('connected successfully');

  connection.isConnected = db.connections[0].readyState;
};

export default connectDB;

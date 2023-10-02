import mongoose from "mongoose";
const mongooseServer = async (): Promise<void> => {
  try {
     await mongoose.connect("mongodb://localhost:27017/graph");
    console.info("Connected to DB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default mongooseServer;

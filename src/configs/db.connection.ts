import mongoose from "mongoose";
import { env } from "./env";

export class DbConnection {
   static async connect() {
      try {
         mongoose.connection.on("open", () => console.log("Connected to MongoDB!🥓"));
         mongoose.connection.on("close", () => console.log("Disconnected from MongoDB!🥨"));
         mongoose.connection.on("error", () => console.log("Failed to connect to MongoDB!🥪"));
      } catch (error: any) {
         throw new Error(error);
      }
      return await mongoose.connect(env.DATABASE_URL);
   }

   static disconnect() {
      return mongoose.disconnect();
   }
}

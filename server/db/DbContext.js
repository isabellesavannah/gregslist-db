//import ValueSchema from "../models/Value";
import CarSchema from "../models/Cars";
import mongoose from "mongoose";

class DbContext {
  //Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
}

export const dbContext = new DbContext();

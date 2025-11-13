// this script defines the Item model for MongoDB.
// in simple terms, it specifies the structure of the data we will store in the database.

import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  what: String,
  when: Date,
  time: String,
  picture: String
});

export default mongoose.model("Item", itemSchema);

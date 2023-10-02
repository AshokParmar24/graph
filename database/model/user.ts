import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "companys",
  },
  password: {
    type: String,
    require: true,
  },
});

export default model("user", userSchema);

import { model, Schema } from "mongoose";
export enum ROLE_TYPE_ENUM {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  ADVISER = "ADVISER",
}
const companySchema = new Schema({
  companyName: { type: String, require: true },
  companyEmail: { type: String, require: true },
  role: { type: String, enum: ROLE_TYPE_ENUM, require: true, default: [ROLE_TYPE_ENUM.ADMIN] },
  gst: String,
  pan: String,
  postcode: Number,
  address: {
    city: {
      type: String,
      require: true,
    },
    state: String,
  },
  createdAt: { type: Date, default: Date.now },
});

export default model("companys", companySchema);

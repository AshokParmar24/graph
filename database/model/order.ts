import { Schema, model } from "mongoose";

const oderSchema = new Schema({
  productName: { type: String, require: true },
  order_number: {
    type: Number,
    unique: true,
  },
  customerName: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
  },
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
});

export default model("orders", oderSchema);

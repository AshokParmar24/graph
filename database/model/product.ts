import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  manufacturerDate: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default model("product", productSchema);

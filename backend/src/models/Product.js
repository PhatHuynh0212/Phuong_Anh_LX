import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    pro_code: { type: String, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    brand: { type: String },
    category: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    sizes: { type: [String], required: true },
    features: { type: [String], required: true },
    color: { type: String, required: true },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        altText: {
          type: String,
        },
      },
    ],
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

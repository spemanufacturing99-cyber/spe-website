import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    content: String,
    image: String,
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);

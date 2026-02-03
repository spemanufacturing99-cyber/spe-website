import mongoose, { Schema, Document, Model } from "mongoose";

export interface IService extends Document {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  longDescription: string[];
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
  createdAt: Date;
}

const ServiceSchema: Schema = new Schema<IService>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  excerpt: { type: String },
  longDescription: [{ type: String }],
  features: [{ type: String }],
  specs: [{ label: String, value: String }],
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const Service: Model<IService> = (mongoose.models.Service as Model<IService>) || mongoose.model<IService>("Service", ServiceSchema);
export default Service;

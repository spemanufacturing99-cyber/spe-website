import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact: Model<IContact> = (mongoose.models.Contact as Model<IContact>) || mongoose.model<IContact>("Contact", ContactSchema);
export default Contact;

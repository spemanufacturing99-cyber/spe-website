import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuote extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  subject?: string;
  message: string;
  createdAt: Date;
}

const QuoteSchema: Schema = new Schema<IQuote>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  service: { type: String },
  subject: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Quote: Model<IQuote> = (mongoose.models.Quote as Model<IQuote>) || mongoose.model<IQuote>("Quote", QuoteSchema);
export default Quote;

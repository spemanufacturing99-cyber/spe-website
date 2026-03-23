import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPortfolio extends Document {
  title: string;
  slug: string;
  subTitle: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: Array<{ label: string; value: string }>;
  bullets: string[];
  heroImage: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioSchema: Schema = new Schema<IPortfolio>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subTitle: { type: String, default: "" },
    industry: { type: String, default: "" },
    summary: { type: String, default: "" },
    challenge: { type: String, default: "" },
    solution: { type: String, default: "" },
    result: { type: String, default: "" },
    metrics: [{ label: String, value: String }],
    bullets: [String],
    heroImage: { type: String, default: "" },
    tags: [String],
  },
  { timestamps: true }
);

const Portfolio: Model<IPortfolio> = (mongoose.models.Portfolio as Model<IPortfolio>) || mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);
export default Portfolio;

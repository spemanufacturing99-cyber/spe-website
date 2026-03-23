import mongoose from "mongoose";

const MaterialSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    shortDescription: { type: String },
    heroImage: { type: String },
    gradesHeading: { type: String },
    gradesSubheading: { type: String },
    grades: [
      {
        grade: { type: String },
        applications: { type: String },
      }
    ],
    servicesHeading: { type: String },
    relatedServices: [
      {
        title: { type: String },
        link: { type: String },
        description: { type: String },
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.models.Material || mongoose.model("Material", MaterialSchema);
import PortfolioProject from "@/components/PortfolioProject";
import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  await connectDB();
  const entries = await Portfolio.find().lean();
  return entries.map((entry) => ({ slug: entry.slug }));
}

export default async function PortfolioSlugPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  await connectDB();
  const entry = await Portfolio.findOne({ slug }).lean();

  if (!entry) {
    // If a portfolio item hasn't been added to the database yet, 
    // provide a graceful fallback so hardcoded header links don't throw a 404.
    const fallbackEntry = {
      title: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      subTitle: "Project Details Pending",
      summary: "Detailed case study and metrics for this project are currently being compiled. Please check back later or contact us for more information.",
      heroImage: "/precision-crafted.png",
      metrics: [],
      bullets: [],
      tags: [],
    };
    return <PortfolioProject item={fallbackEntry} />;
  } else {
    // Next.js App Router Client Components require plain JSON objects. 
    // Mongoose models and ObjectIds throw a serialization error.
    const safeEntry = JSON.parse(JSON.stringify(entry));
    return <PortfolioProject item={safeEntry} />;
  }
}

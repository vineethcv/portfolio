import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import MDXContent from "@/components/MDXContent";

export const generateStaticParams = () =>
  allProjects.map(p => ({ slug: p.slug }));

const publishedDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = allProjects.find(p => p.slug === params.slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.summary };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const doc = allProjects.find(p => p.slug === params.slug);
  if (!doc) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold">{doc.title}</h1>
      <p className="mt-2 text-sm text-neutral-400">{publishedDateFormatter.format(new Date(doc.date))}</p>
      <div className="h-px bg-neutral-800 my-6" />
      <MDXContent code={doc.body.code} />
    </div>
  );
}

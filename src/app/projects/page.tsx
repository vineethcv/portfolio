import Link from "next/link";
import type { Route } from "next";
import { allProjects } from "contentlayer/generated";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const items = allProjects
    .filter(p => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(p => {
          const href = p.url as Route;
          return (
            <Link key={p._id} href={href} className="rounded-2xl border border-neutral-800 p-5 hover:border-neutral-700">
              <h2 className="text-lg font-medium">{p.title}</h2>
              <p className="mt-2 text-sm text-neutral-300">{p.summary}</p>
              {p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs text-neutral-300 rounded-full border border-neutral-800 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

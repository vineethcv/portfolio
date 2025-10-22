"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";

type Props = { code: string };

export default function MDXContent({ code }: Props) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-invert prose-pre:overflow-x-auto max-w-none">
      <Component />
    </article>
  );
}
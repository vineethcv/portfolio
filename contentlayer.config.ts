import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const computed = {
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.flattenedPath.replace(/^projects\//, "").replace(/^writing\//, ""),
  },
  url: {
    type: "string",
    resolve: (doc: any) =>
      doc.type === "Project" ? `/projects/${doc._raw.flattenedPath.replace(/^projects\//, "")}`
                             : `/writing/${doc._raw.flattenedPath.replace(/^writing\//, "")}`,
  },
} as const;

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    draft: { type: "boolean", required: false, default: false },
  },
  computedFields: computed,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `writing/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    draft: { type: "boolean", default: false },
  },
  computedFields: computed,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
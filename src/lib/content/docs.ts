import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_DIR = path.join(process.cwd(), "content/docs");

export interface DocPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  order?: number;
  updatedAt?: string;
  published: boolean;
}

export async function getDocPages(): Promise<DocPage[]> {
  if (!fs.existsSync(DOCS_DIR)) return [];

  const files = fs.readdirSync(DOCS_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(DOCS_DIR, file);
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "",
        description: data.description || "",
        category: data.category || "General",
        order: data.order,
        updatedAt: data.updatedAt,
        published: data.published !== false,
      };
    })
    .filter((doc) => doc.published)
    .sort((a, b) => (a.order || 999) - (b.order || 999));
}

export async function getDocSlugs(): Promise<string[]> {
  const docs = await getDocPages();
  return docs.map((doc) => doc.slug);
}

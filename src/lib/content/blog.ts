import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  image?: string;
  tags: string[];
  published: boolean;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        updatedAt: data.updatedAt,
        author: data.author || "GoAds Team",
        image: data.image,
        tags: data.tags || [],
        published: data.published !== false,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getBlogPosts();
  return posts.map((post) => post.slug);
}

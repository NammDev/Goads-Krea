import Link from "next/link";
import { getBlogPosts } from "@/lib/content";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Blog</h1>
        <p className="text-lg text-primary-600 mb-12">
          Latest insights, tips, and updates from the GoAds team.
        </p>

        {posts.length === 0 ? (
          <p className="text-primary-600">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-primary-200 pb-8 last:border-0"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block hover:opacity-80 transition-opacity"
                >
                  <h2 className="text-2xl font-bold text-primary-900 mb-2 group-hover:text-primary-700">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-primary-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <p className="text-primary-600 mb-4">{post.description}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

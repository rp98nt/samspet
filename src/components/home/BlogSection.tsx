import Image from "next/image";
import { blogPosts } from "@/data/site";

export function BlogSection() {
  return (
    <section id="blog" className="wood-texture py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-semibold text-zinc-800">
          From Our Blog
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm shadow-md"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-6">
                <h3 className="text-center text-sm font-semibold text-white">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-zinc-400" />
          <span className="h-2 w-2 rounded-full bg-zinc-300" />
          <span className="h-2 w-2 rounded-full bg-zinc-300" />
        </div>
      </div>
    </section>
  );
}

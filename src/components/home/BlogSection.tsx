import Image from "next/image";
import { blogPosts } from "@/data/site";

export function BlogSection() {
  return (
    <section id="blog" className="section-viewport wood-texture">
      <div className="section-viewport-inner">
        <div className="mx-auto flex h-full max-w-7xl min-h-0 w-full flex-col">
          <h2
            className="shrink-0 text-center font-[family-name:var(--font-montserrat)] text-[clamp(1.25rem,3vh,1.875rem)] font-semibold text-zinc-800"
          >
            From Our Blog
          </h2>
          <div className="mt-3 grid min-h-0 flex-1 grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group relative min-h-0 overflow-hidden rounded-sm shadow-md"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-3 sm:px-3 sm:py-4"
                >
                  <h3 className="text-center text-[10px] font-semibold text-white sm:text-xs">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-2 flex shrink-0 justify-center gap-2" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-zinc-400" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

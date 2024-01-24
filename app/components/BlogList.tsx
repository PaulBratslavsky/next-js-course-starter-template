import Link from "next/link";
import Image from "next/image";

interface ImageProps {
  url: string;
  alternateText: string;
}

interface PostProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: ImageProps;
  date: string;
  createdAt: string;
  category: { title: string };
  author: {
    name: string;
    role: string;
    image: ImageProps;
  };
}

interface BlogListProps {
  readonly data: PostProps[];
}

export default function BlogList({ data }: BlogListProps) {
  return (
    <div className="my-6">
      <div className="grid gap-y-8 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((post: PostProps) => (
          <BlogListCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function BlogListCard({ post }: { readonly post: PostProps }) {
  return (
    <Link href={post.slug}>
      <article className="shadow-lg rounded-lg">
        <div className="relative w-full">
          <Image
            src={post.image.url}
            alt={post.image.alternateText}
            height={400}
            width={400}
            className="aspect-[16/9] w-full rounded-t-lg bg-base-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between gap-x-4 text-xs">
            <time dateTime={post.createdAt}>{post.date}</time>
            <div className="badge badge-ghost">{post.category.title}</div>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-primary">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6">
              {post.description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <Image
                  src={post.author.image.url}
                  alt={post.author.image.alternateText}
                  height={400}
                  width={400}
                />
              </div>
            </div>
            <div className="text-sm leading-6">
              <p className="font-semibold">
                <span className="absolute inset-0" />
                {post.author.name}
              </p>
              <p>{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

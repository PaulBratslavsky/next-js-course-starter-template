import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero my-12 rounded-lg">
      <div className="hero-content p-0 flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mx-8">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href="/blog" className="btn btn-primary">Latest Posts</Link>
        </div>
      </div>
    </div>
  );
}

interface DynamicPageParams {
  params: {
    page: string;
  };
}

export default function DynamicPageRoute({
  params,
}: Readonly<DynamicPageParams>) {
  return (
    <div className="hero bg-base-200 h-[500px] my-4 rounded-md">
      <div className="hero-content">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">This Is A Dynamic Page</h1>
          <pre className="py-6">Params: {params.page}</pre>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

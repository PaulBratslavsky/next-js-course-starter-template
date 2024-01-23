interface DynamicPageParams {
  readonly params: {
    page: string;
  };
}

export default function DynamicPageRoute({ params }: DynamicPageParams) {
  return (
    <div>
      <h1>Dynamic Page Route</h1>
      <pre>{params.page}</pre>
    </div>
  );
}

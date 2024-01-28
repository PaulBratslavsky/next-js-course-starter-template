interface FeatureProps {
  id: number;
  name: string;
  description: string;

}

interface FeaturesProps {
  feature: FeatureProps[];
}

export default function Features({ data }: { data: FeaturesProps }) {
  if (!data?.feature) return <p>No items found.</p>;
  const { feature } = data;
  return (
    <div className="my-24 rounded-lg bg-base-100">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {feature.map((feature: FeatureProps) => (
          <div key={feature.id} className="flex flex-col">
            <dt className="text-primary font-semibold leading-7">
              {feature.name}
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
              <p className="flex-auto">{feature.description}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

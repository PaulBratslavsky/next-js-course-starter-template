interface FeatureProps {
  name: string;
  description: string;
}

interface FeaturesProps {
  readonly data: FeatureProps[];
}

export default function Feature({ data }: FeaturesProps) {
  return (
    <div className="my-24 rounded-lg bg-base-100">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {data.map((feature: FeatureProps) => (
          <div key={feature.name} className="flex flex-col">
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

import Hero from "@/app/components/Hero";
import Feature from "@/app/components/Feature";

import { heroData, featuresData } from "@/app/fake-data";

export default function HomeRoute() {
  return (
    <div>
      <Hero data={heroData} />
      <Feature data={featuresData} />
    </div>
  );
}

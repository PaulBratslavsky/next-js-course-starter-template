import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";

import { heroData, featuresData } from "@/app/fake-data";

export default function HomeRoute() {
  return (
    <div>
      <Hero data={heroData} />
      <Features data={featuresData} />
    </div>
  );
}

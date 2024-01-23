import Link from "next/link";

interface HeroProps {
  readonly data: {
    heading: string;
    text: string;
    image: {
      url: string;
      alternativeText: string;
    };
    link: {
      text: string;
      href: string;
    };
  };
}

export default function Hero({ data } : HeroProps) {
  const { heading, text, image, link } = data;
  return (
    <div className="hero my-12 rounded-lg">
      <div className="hero-content p-0 flex-col lg:flex-row">
        <img
          src={image.url}
          alt={image.alternativeText}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mx-8">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{text}</p>
          <Link href={link.href} className="btn btn-primary">
            {link.text}
          </Link>
        </div>
      </div>
    </div>
  );
}

import {
  HashtagIcon,
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/app/icons/index";

interface SocialLinkProps {
  href: string;
  icon: string;
}

interface SocialLinksProps {
  data: {
    socialLinks: SocialLinkProps[];
  };
}

function selectIcon(icon: string) {
  switch (icon) {
    case "FACEBOOK":
      return <FacebookIcon />;
    case "TWITTER":
      return <TwitterIcon />;
    case "YOUTUBE":
      return <YouTubeIcon />;
    default:
      return null;
  }
}

function SocialLink({ data }: { readonly data: SocialLinkProps }) {
  const { href, icon } = data;
  return <a href={href}>{selectIcon(icon)}</a>;
}

export default function Footer({ data }: Readonly<SocialLinksProps>) {
  const { socialLinks } = data;
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content rounded-lg">
      <aside className="items-center grid-flow-col">
        <HashtagIcon />
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {socialLinks.map((item: SocialLinkProps, index: number) => {
          return <SocialLink key={index} data={item} />;
        })}
      </nav>
    </footer>
  );
}

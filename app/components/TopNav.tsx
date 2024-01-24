import Link from "next/link";

interface NavItemProps {
  text: string;
  href: string;
}

interface NavItemsProps {
  readonly data: {
    logoText: string;
    navItems: NavItemProps[];
  }
}



export default function TopNav({ data }: NavItemsProps) {
  const { logoText, navItems } = data;
  return (
    <div className="navbar bg-base-100 shadow-lg rounded-lg">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">{logoText}</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item: NavItemProps, index: number) => {
            return (
              <li key={index} className="mr-2">
                <Link href={item.href}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn">Login</Link>
      </div>
    </div>
  );
}

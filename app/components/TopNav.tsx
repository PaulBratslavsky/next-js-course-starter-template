import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

interface NavItem {
  name: string;
  path: string;
}

export default function TopNav() {
  return (
    <div className="navbar bg-base-100 shadow-lg rounded-lg">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">Strapi + Next</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item: NavItem, index: number) => {
            return (
              <li key={index} className="mr-2">
                <Link href={item.path}>{item.name}</Link>
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

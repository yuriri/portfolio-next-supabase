"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className, children }) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={
        pathName.startsWith(href)
          ? `${className} underline`
          : `${className} `
      }
    >
      {children}
    </Link>
  );
}

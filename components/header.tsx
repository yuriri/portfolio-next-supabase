import Link from "next/link"
import Image from "next/image"
import logoImg from "@/assets/images/logo_white.png";
import NavLink from "@/components/nav-link";

import classes from "./header.module.css";

export function Header() {
  return (
    <header className={`flex justify-between md:justify-around items-center gap-8 py-2 px-2 md:px-0 w-full ${classes.header}`}>
      <h1>
        <Link href="/" className="flex justify-center items-center gap-5 hover:text-blue-700">
          <Image src={logoImg} alt="Sakai Portfolio" width={30} height={30} />Sakai Portfolio
        </Link>
      </h1>
      <nav className="flex gap-4 items-center">
        <NavLink href="/works" className="hover:text-blue-700 hover:underline">Works</NavLink>
        <NavLink href="/jobs" className="hover:text-blue-700 hover:underline">Jobs</NavLink>
      </nav>
    </header>
  )
}
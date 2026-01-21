import Link from "next/link"
import Image from "next/image"
import logoImg from "@/assets/images/logo_white.png";

import classes from "./header.module.css";

export function Header() {
  return (
    <header className={`sticky backdrop-blur-sm top-0 h-auto flex justify-between  items-center gap-8 py-2 px-2 md:px-0 ${classes.header}`}>
      <h1>
        <Link href="/" className="flex justify-center items-center gap-5 hover:text-blue-700">
          <Image src={logoImg} alt="Sakai Portfolio" width={30} height={30} />Sakai Portfolio
        </Link>
      </h1>
      <nav className="flex gap-4 items-center">
        <Link href="/works" className="hover:text-blue-700 hover:underline">Works</Link>
        <Link href="/jobs" className="hover:text-blue-700 hover:underline">Jobs</Link>
      </nav>
    </header>
  )
}
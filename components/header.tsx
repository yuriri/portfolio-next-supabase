import Link from "next/link"
import Image from "next/image"
import logoImg from "@/assets/images/logo_white.png";

export function Header() {
  return (
    <header className="flex justify-around items-center gap-8 py-2 w-full">
      <h1 className="">
        <Link href="/" className="flex justify-center items-center gap-5">
          <Image src={logoImg} alt="Sakai Portfolio" width={30} height={30} />Sakai Portfolio
        </Link>
      </h1>
      <nav className="flex gap-2 items-center">
        <Link href="/works">works</Link>
        <Link href="/jobs">jobs</Link>
      </nav>
    </header>
  )
}
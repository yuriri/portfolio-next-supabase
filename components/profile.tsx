import Image from "next/image"
import Link from "next/link";
import gitLogo from "@/assets/images/logos/github.svg";

export default function Profile() {
  return <>
    <div className="md:w-3/5 mx-auto">
      <p>
        フロントエンドエンジニアとして約10年の経験があります。<br />
        WordPressによるサイトの構築や、LPの構築運用・SEO最適化、開発環境の改善などのWeb制作に幅広く関わってきました。<br />
        今後はReactとNext.jsをメインにキャリアを進めて行こうと勉強中です。
      </p>
      <Link href="about-this-site" className="hover:text-pink-500 hover:underline">このサイトについて</Link>
      <a href="https://github.com/yuriri/" target="_blank"><Image src={gitLogo} width={40} height={40} alt="githubリポジトリーリンク" /></a>
      <p>O&apos;ReillyのプラットフォームでReactのコースを学習中。</p>
      <a href="https://learning.oreilly.com/course/react-the/9781801812603/" className="hover:text-pink-500 hover:underline" target="_blank">React - The Complete Guide (Includes Hooks, React Router, and Redux) - Second Edition</a>
    </div>
  </>

}
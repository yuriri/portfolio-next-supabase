import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About This Page | Sakai Portfolio site.",
  description: "このポートフォリオサイトについての紹介です。",
};

const AboutThisSitePage = () => {
  return <main>
    <h2 className="title-02">このサイトについて</h2>
    <h3 className="title-03"><span className="bg-green-600 text-white px-4">機能要件</span></h3>
    <h4 className="title-04"><span className="border-b-green-600 border-b-2">言語</span></h4>
    <p>TypeScript</p>
    <h4 className="title-04 mt-2"><span className="border-b-green-600 border-b-2">フレームワーク</span></h4>
    <p>Next.js,Tailwind</p>
    <h4 className="title-04 mt-2"><span className="border-b-green-600 border-b-2">DB</span></h4>
    <p>SupaBase</p>
    <h4 className="title-04 mt-2"><span className="border-b-green-600 border-b-2">サーバー/デプロイ</span></h4>
    <p>Vercel</p>
    <h3 className="title-03 mt-8"><span className="bg-green-600 text-white px-4">開発時間</span></h3>
    <p>約30時間</p>
    <h3 className="title-03 mt-8"><span className="bg-green-600 text-white px-4">所感</span></h3>
    <h4 className="title-04"><span className="border-b-green-600 border-b-2">2026/01/21時点</span></h4>
    <ul className="list-disc list-inside">
      <li>DB(SupaBase)とNext.jsの連携に関して、Firebaseは使ったことがあったが、Supabaseは初めて使用したためデータ取得において、TypeScriptの型付けに時間がかかってしまった。エラー処理などは後日対応予定。</li>
    </ul>
    <h3 className="title-03 mt-8"><span className="bg-green-600 text-white px-4">残タスク</span></h3>
    <h4 className="title-04"><span className="border-b-green-600 border-b-2">2026/01/21時点</span></h4>
    <ul className="list-disc list-inside">
      <li>認証機能 - 固定パスワードとIDでのページ閲覧</li>
      <li>CSSアニメーション</li>
      <li>Works検索機能</li>
    </ul>

  </main>
}

export default AboutThisSitePage;
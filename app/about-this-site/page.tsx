import { Metadata } from "next";
import { HeadingLv02 } from "@/components/headings";

export const metadata: Metadata = {
  title: "About This Page | Sakai Portfolio site.",
  description: "このポートフォリオサイトについての紹介です。",
};

const AboutThisSitePage = () => {
  return <main>
    <HeadingLv02 color="green-600">このサイトについて</HeadingLv02>
    <h3 className="title-03"><span className="bg-green-600 text-white px-4">機能要件</span></h3>
    <h4 className="title-04"><span className="border-b-green-600 border-b-2">言語</span></h4>
    <p>JavaScript,TypeScript</p>
    <h4 className="title-04 mt-2"><span className="border-b-green-600 border-b-2">フレームワーク</span></h4>
    <p>Next.js,TailWind</p>
    <h4 className="title-04 mt-2"><span className="border-b-green-600 border-b-2">DB</span></h4>
    <p>Supabase</p>
    <h4 className="title-04 mt-2"><span className="border-b-green-600 border-b-2">サーバー/デプロイ</span></h4>
    <p>Vercel</p>
    <h3 className="title-03 mt-8"><span className="bg-green-600 text-white px-4">開発時間</span></h3>
    <p>約30時間</p>
    <h3 className="title-03 mt-8"><span className="bg-green-600 text-white px-4">所感</span></h3>
    <h4 className="title-04"><span className="border-b-green-600 border-b-2">2026/01/21時点</span></h4>
    <ul className="list-disc list-inside">
      <li>DB(Supabase)とNext.jsの連携自体初めての実装、またSupabaseの使用も初めてだったので手探りで進めた。特にデータ取得において、TypeScriptの型付けに時間がかかってしまった。エラー処理などは後日対応予定。</li>
      <li>ローディングの表示などもう少しNextの機能を利用して追加していきたい。</li>
      <li>Supabaseを選んだ理由は、自由度が高いこととNext.jsのドキュメントが豊富（なように思えた）ため。GUIの操作もわかりやすいので、今後worksの検索機能を追加する際に色々深掘りしたい。</li>
    </ul>
    <h3 className="title-03 mt-8"><span className="bg-green-600 text-white px-4">残タスク</span></h3>
    <h4 className="title-04"><span className="border-b-green-600 border-b-2">2026/01/21時点</span></h4>
    <ul className="list-disc list-inside">
      <li>認証機能 - 固定パスワードとIDでのページ閲覧</li>
      <li>ローディング</li>
      <li>CSSアニメーション</li>
      <li>Works検索機能</li>
    </ul>

  </main>
}

export default AboutThisSitePage;
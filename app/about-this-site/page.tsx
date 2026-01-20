import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About This Page | Sakai Portfolio site.",
  description: "このポートフォリオサイトについての紹介です。",
};

const AboutThisSitePage = () => {
  return <>
    <h2>このページについて</h2>
    <h3>機能要件</h3>
    <h4>言語</h4>
    <h4>フレームワーク</h4>
    <h4>DB</h4>
  </>
}

export default AboutThisSitePage;
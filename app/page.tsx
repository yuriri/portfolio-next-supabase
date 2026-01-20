import Link from "next/link";
import { Suspense } from "react";
import { getDataFromSupabase } from "@/lib/getData";
import { workType } from "@/types/job.types";

import { Hero } from "@/components/hero";
import SectionBlock from "@/components/ui/sections";
import SkillsContent from "@/components/skills/skills-content";
import WorksGrid from "@/components/works/works-grid";
import Profile from "@/components/profile";

async function WorksData() {
  const works = await getDataFromSupabase<workType>("works", 3);

  return <WorksGrid works={works}></WorksGrid>;
}

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <SectionBlock title="Profile" color="pink">
          <Profile />
        </SectionBlock>
        <SectionBlock title="Works" color="blue">
          <Suspense fallback={<div>Loading...</div>}>
            <WorksData />
          </Suspense>
          <Link href="works" className="w-[240px] py-2 mx-auto mt-6 border-white border-2 text-white bg-blue-700 hover:border-blue-700 hover:bg-white hover:text-blue-700 text-center flex justify-center items-center">もっと見る</Link>
        </SectionBlock>
        <SectionBlock title="Skills" color="orange">
          <SkillsContent />
        </SectionBlock>
      </main>
    </>
  );
}

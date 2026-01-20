import { Hero } from "@/components/hero";
import Link from "next/link";
import { Suspense } from "react";
import SectionBlock from "@/components/ui/sections";
import SkillsContent from "@/components/skills/skills-content";
import {getDataFromSupabase} from "@/lib/getData";
import WorksGrid from "@/components/works/works-grid";
import { workType } from "@/types/job.types";

async function WorksData() {
  const works = await getDataFromSupabase<workType>("works");

  return <WorksGrid works={works}></WorksGrid>;
}

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SectionBlock title="Works">
          <Suspense fallback={<div>Loading...</div>}>
            <WorksData />
          </Suspense>
          <Link href="works">More</Link>
        </SectionBlock>
        <SectionBlock title="Skills">
          <SkillsContent />
        </SectionBlock>
        <Link href="about-this-site">このサイトについて</Link>
      </main>
    </>
  );
}

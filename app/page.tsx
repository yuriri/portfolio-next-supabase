import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import SectionBlock from "@/components/ui/sections";
import SkillsContent from "@/components/skills/skills-content";
import getDataFromSupabase from "@/lib/getData";
import WorksGrid from "@/components/works/works-grid";

async function WorksData() {
  const works = await getDataFromSupabase("works");

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

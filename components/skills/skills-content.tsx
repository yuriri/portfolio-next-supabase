import { getSkillsDataFromSupabase } from "@/lib/getData";
import { skillType } from "@/types/job.types";
import { Suspense } from "react";

const typeValues = ["language", "framework", "dev", "cms", "taskRunner", "editor", "design", "communication"];

const getTitleFromType = (tValue: string): string => {
  switch (tValue) {
    case "language":
      return "言語";
    case "framework":
      return "フレームワーク";
    case "dev":
      return "開発";
    case "cms":
      return "CMS";
    case "taskRunner":
      return "タスクランナー";
    case "editor":
      return "エディター";
    case "design":
      return "デザイン";
    case "communication":
      return "コミュニケーション";
    default:
      return tValue;
  }
};

async function SkillsDataLanguage() {
  // すべてのスキルデータを取得
  const skillsDataPromises = typeValues.map(async (tValue) => {
    const skills = await getSkillsDataFromSupabase<skillType>("skills", "type", tValue);
    return {
      type: tValue,
      title: getTitleFromType(tValue),
      skills: skills
    };
  });

  const allSkillsData = await Promise.all(skillsDataPromises);

  return (
    <>
      <p className="text-center mb-4">各スキルの習熟度 (5点中)</p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-3 md:gap-y-8">
        {allSkillsData.map((skillData) => (
          <section key={skillData.type} className="flex flex-col gap-2">
            <h3 className="text-xl"><span className="bg-orange-700 text-white px-2">{skillData.title}</span></h3>
            <ul className="flex flex-col gap-y-2">
              {skillData.skills.map((skill) => (
                <li key={skill.id}>
                  {skill.name}...<span className="text-lg text-orange-700 font-bold">{skill.score}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}


const SkillsContent = async () => {
  return <Suspense fallback={<p>Loading...</p>}>
    <SkillsDataLanguage />
  </Suspense>
}

export default SkillsContent;
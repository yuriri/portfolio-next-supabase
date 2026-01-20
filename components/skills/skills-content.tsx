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
    <div>
      {allSkillsData.map((skillData) => (
        <div key={skillData.type}>
          <h3>{skillData.title}</h3>
          <ul>
            {skillData.skills.map((skill) => (
              <li key={skill.id}>
                {skill.name} - スコア: {skill.score}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


const SkillsContent = async () => {
  return <Suspense fallback={<p>Loading...</p>}>
    <SkillsDataLanguage />
  </Suspense>
}

export default SkillsContent;
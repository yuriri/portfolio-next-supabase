import { jobTypeAll } from "@/types/job.types";

export default function JobItem({ name, slug, description, start_date, end_date, skills, job_type }: jobTypeAll) {
  return (
    <>
    <h3 className="title-03"><span className="bg-blue-700 text-white px-4">{name}</span></h3>
    <p>在籍期間：{start_date}〜{end_date ?? "現在"}</p>
    <p>職務内容：{description}</p>
    <p>就業形態：{job_type}</p>
    <p>スキル：</p>
    {skills &&
      <ul className="flex gap-2">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    }
    </>
  );
}

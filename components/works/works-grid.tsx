import WorkItem from "./work-item";
import { workType } from "@/types/job.types";
import classes from "./works-grid.module.css";

// type workType = Database['public']['Tables']['works']['Row'];

const WorksItem = ({ works }: { works: workType[] }) => {
  return (
    <ul className={`grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3 list-inside justify-between`}>
      {works.map((work) => (
        <li key={work.id} className={`flex-1 border-blue-700 border-2 py-4 ${classes["works-list-item"]}`}>
          <WorkItem {...work} />
        </li>
      ))}
    </ul>
  );
}

export default WorksItem;
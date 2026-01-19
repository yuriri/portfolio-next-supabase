import WorkItem from "./work-item";
import { workType } from "@/types/job.types";

// type workType = Database['public']['Tables']['works']['Row'];

const WorksItem = ({works}:{works:workType[]}) => {
    return (
    <ul className="flex list-inside justify-between">
      {works.map((work) => (
        <li key={work.id} className="flex-1">
          <WorkItem {...work} />
        </li>
      ))}
    </ul>
  );
}

export default WorksItem;
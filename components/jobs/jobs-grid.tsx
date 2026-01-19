import JobItem from "./job-item";
import { jobType } from "@/types/job.types";

export default function JobsGrid({jobs}:{jobs:jobType[]}) {
    return (
    <ul className="">
      {jobs.map((job) => (
        <li key={job.id}>
          <JobItem {...job} />
        </li>
      ))}
    </ul>
  );
}
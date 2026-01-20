import JobItem from "./job-item";
import { jobTypeAll } from "@/types/job.types";

export default function JobsGrid({jobs}:{jobs:jobTypeAll[]}) {
    return (
    <ul className="flex flex-col gap-8">
      {jobs.map((job) => (
        <li key={job.id}>
          <JobItem {...job} />
        </li>
      ))}
    </ul>
  );
}
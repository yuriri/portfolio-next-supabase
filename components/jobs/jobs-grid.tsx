import JobItem from "./job-item";
import { jobTypeAll } from "@/types/job.types";

export default function JobsGrid({jobs}:{jobs:jobTypeAll[]}) {
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
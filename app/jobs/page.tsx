import { Suspense } from "react";
import JobsGrid from "@/components/jobs/jobs-grid";
import getDataFromSupabase  from "@/lib/getData";

async function JobsData() {
  const jobs = await getDataFromSupabase("jobs");

  return <JobsGrid jobs={jobs}>{JSON.stringify(jobs, null, 2)}</JobsGrid>;
}

export default function Jobs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobsData />
    </Suspense>
  );
}
import { Suspense } from "react";
import JobsGrid from "@/components/jobs/jobs-grid";
import {getDataFromSupabase} from "@/lib/getData";
import { jobTypeAll } from "@/types/job.types";

async function JobsData() {
  const jobs = await getDataFromSupabase<jobTypeAll>("jobs");

  return <JobsGrid jobs={jobs} />;
}

export default function Jobs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobsData />
    </Suspense>
  );
}
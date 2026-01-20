import { Suspense } from "react";
import JobsGrid from "@/components/jobs/jobs-grid";
import { getDataFromSupabase } from "@/lib/getData";
import { jobTypeAll } from "@/types/job.types";
import { Metadata } from "next";
import { HeadingLv02 } from "@/components/headings";

export const metadata: Metadata = {
  title: "Jobs | Sakai Portfolio site.",
  description: "My Job History.",
};

async function JobsData() {
  const jobs = await getDataFromSupabase<jobTypeAll>("jobs");

  return <JobsGrid jobs={jobs} />;
}

export default function Jobs() {
  return (
    <main>
      <section>
        <HeadingLv02 color="blue-700">Job History</HeadingLv02>
        <Suspense fallback={<div>Loading...</div>}>
          <JobsData />
        </Suspense>
      </section>
    </main>
  );
}
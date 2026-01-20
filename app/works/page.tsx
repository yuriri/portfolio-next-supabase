import { Suspense } from "react";
import WorksGrid from "@/components/works/works-grid";
import {getDataFromSupabase} from "@/lib/getData";
import { workType } from "@/types/job.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Sakai Portfolio site.",
  description: "My Works.",
};

async function WorksData() {
  const works = await getDataFromSupabase<workType>("works");

  return <WorksGrid works={works}></WorksGrid>;
}

export default function WorksPage() {
  return (
    <>
      <h2>Works</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <WorksData />
      </Suspense>
    </>
  );
}
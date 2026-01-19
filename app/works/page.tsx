import { Suspense } from "react";
import WorksGrid from "@/components/works/works-grid";
import getDataFromSupabase  from "@/lib/getData";

async function WorksData() {
  const works = await getDataFromSupabase("works");

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
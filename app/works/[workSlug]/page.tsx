import { Suspense } from "react";

type params = {
  workSlug: string
}

async function getParams(params:Promise<params>) {
  const gotParams = await params;
  return gotParams.workSlug;
}

export default async function WorkPage({params}: {params:Promise<params>}) {
  const gotParams = getParams(params);
  return <>
  <Suspense fallback={<p>fetching..</p>}>
    <h1>{gotParams}</h1>
  </Suspense>
  </>
}
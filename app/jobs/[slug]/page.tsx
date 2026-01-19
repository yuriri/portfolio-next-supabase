import { Suspense } from "react";

type params = {
  slug: string
}

export default async function JobPage(params:Promise<params>) {
  const gotParams = await params;
  const pageSlug = gotParams.slug;

  return <Suspense fallback={<p>loading..</p>}>
    <div><h1>{pageSlug}</h1></div>
  </Suspense>
  
}
import { Suspense } from "react";

type params = {
  slug: string
}

export default async function JobPage(params:Promise<params>) {
  const gotParams = await params;
  const pageSlug = gotParams.slug;

  return (
    <main>
      <section>
        <Suspense fallback={<p>loading..</p>}>
          <div><h2 className="title-02">{pageSlug}</h2></div>
        </Suspense>
      </section>
    </main>
  )
  
}
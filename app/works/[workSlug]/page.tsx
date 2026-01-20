import { Suspense } from "react";
import { getEachDataFromSupabase } from "@/lib/getData";
import { workType } from "@/types/job.types";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    workSlug: string;
  }>;
};

async function WorkData({ params }: PageProps) {
  const { workSlug } = await params;
  const data = await getEachDataFromSupabase<workType>("works", workSlug);

  if (!data) {
    return <div>作品が見つかりませんでした</div>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Image src={`/images/screenshots/${data.slug}.webp`} alt={data.title} width={1000} height={1000} />
      <p>{data.role}</p>
      <p>{data.skills}</p>
      <p><a href={data.url || ""} target="_blank">{data.url}</a></p>
      <p>{data.created_at}</p>
      <p>{data.id}</p>
    </div>
  );
}

export default async function WorkPage({ params }: PageProps) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <WorkData params={params} />
    </Suspense>
  );
}
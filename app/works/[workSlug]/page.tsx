import { Suspense } from "react";
import { getEachDataFromSupabase } from "@/lib/getData";
import { workType } from "@/types/job.types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formattedDate } from "@/lib/formatDate";

type PageProps = {
  params: Promise<{
    workSlug: string;
  }>;
};

async function WorkData({ params }: PageProps) {
  const { workSlug } = await params;
  // workSlug取得前にdataを取得しようとするとエラーになるので、workSlugを取得してからdataを取得したい
  const data = await getEachDataFromSupabase<workType>("works", workSlug);

  if (!data) {
    return <div>ページが見つかりませんでした</div>;
  }

  const formattedDuration = formattedDate(data.duration);

  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p><a href={data.url || ""} target="_blank">{data.url}</a></p>
      <Image src={`/images/screenshots/${data.slug}.webp`} alt={data.title} width={1000} height={1000} loading="eager" />
      <dl>
        <dt>担当</dt>
        <dd>{data.role}</dd>
        <dt>スキル</dt>
        <dd>{data.skills}</dd>
        <dt>制作時期</dt>
        <dd>{formattedDuration}</dd>
      </dl>
    </section>
  );
}

export default async function WorkPage({ params }: PageProps) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <WorkData params={params} />
    </Suspense>
  );
}
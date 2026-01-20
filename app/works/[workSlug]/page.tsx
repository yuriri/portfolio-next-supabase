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

export async function generateMetadata({ params }: PageProps) {
  const gotParams = await params;
  const data = await getEachDataFromSupabase<workType>("works", gotParams.workSlug);

  if (!data) {
    notFound();
  }

  return {
    title: `${data.title} | Works | Sakai Portfolio site.`,
    description: `${data.title}の詳細ページです。`,
  };
}

async function WorkData({ params }: PageProps) {
  const { workSlug } = await params;
  // workSlug取得前にdataを取得しようとするとエラーになるので、workSlugを取得してからdataを取得したい
  const data = await getEachDataFromSupabase<workType>("works", workSlug);

  if (!data) {
    return <div>ページが見つかりませんでした</div>;
  }

  const formattedDuration = formattedDate(data.duration);

  return (
    <main>
      <section className="section-child-01">
        <h2 className="title-02">{data.title}</h2>
        <p className="text-right hover:text-blue-700 hover:underline"><a href={data.url || ""} target="_blank">{data.url}</a></p>
        <Image src={`/images/screenshots/${data.slug}.webp`} alt={data.title} width={1000} height={1000} loading="eager" className="border-blue-700 border-2 mx-auto mt-6" />
        <p className="mt-8 w-4/5 mx-auto">{data.description}</p>
        <dl className="mt-8 flex flex-col gap-2 w-4/5 mx-auto">
          <dt className="inline bg-blue-700 px-2 py-1 text-white">担当</dt>
          <dd>{data.role}</dd>
          <dt className="inline bg-blue-700 px-2 py-1 text-white">スキル</dt>
          <dd>{data.skills}</dd>
          <dt className="inline bg-blue-700 px-2 py-1 text-white">制作時期</dt>
          <dd>{formattedDuration}</dd>
        </dl>
      </section>
    </main>
  );
}

export default async function WorkPage({ params }: PageProps) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <WorkData params={params} />
    </Suspense>
  );
}
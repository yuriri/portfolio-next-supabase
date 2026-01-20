import Link from "next/link";
import { jobTypeAll } from "@/types/job.types";

export default function JobItem({ name, slug }: jobTypeAll) {
  return (
    <article className="">
      <header>
        {/* <div className="">
          <Image src={image} alt={name} fill />
        </div> */}
        <div className="">
          <h2>{name}</h2>
        </div>
      </header>
      <div className="">
        {/* <p className="">{summary}</p> */}
        <div className="">
          <Link href={`/jobs/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

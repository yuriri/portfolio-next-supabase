import Link from "next/link";
import Image from "next/image";
import { workType } from "@/types/job.types";

export default function WorkItem({ title, url,  slug, role, skills }: workType) {
  return (
    <article className="">
      <header>
        <hgroup className="">
          <h2>{title}</h2>
        <Image src={`/images/screenshots/${slug}.webp`} alt={title ? title : ""} width="240" height="80" className="object-fill" />
          {skills &&
          skills!.map((skill) => <p key={skill} className="inline-flex">{skill}</p>)
          }
        </hgroup>
      </header>
      <div className="">
        {url &&
          <p><a href={url} target="_blank">{url}</a></p>
        }
        {role &&
          <p>{role}</p>
        }
        <div className="">
          <Link href={`/works/${slug}`} className="p-1 border border-gray rounded-md">View Details</Link>
        </div>
      </div>
    </article>
  );
}

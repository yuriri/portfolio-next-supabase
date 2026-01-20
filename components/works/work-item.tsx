import Link from "next/link";
import Image from "next/image";
import { workType } from "@/types/job.types";

import classes from "./work-item.module.css";

export default function WorkItem({ title, url, slug, role, skills }: workType) {
  return (
    <section className="flex flex-col gap-y-4 h-full">
      <header className="flex flex-col-reverse items-center gap-y-4 flex-1">
        <h2 className="text-center w-4/5 font-medium"><span className="bg-blue-700 text-white px-2">{title}</span></h2>
        <div className={`text-center ${classes.thumbnailArea}`}>
          <Image src={`/images/screenshots/${slug}.webp`} alt={title ? title : ""} width="240" height="80" className="inline" />
        </div>
      </header>
      <div className="work-content flex flex-col gap-1 w-4/5 self-center text-sm flex-auto">
        {skills &&
          <ul className="flex gap-1 text-xs">
            {skills!.map((skill) => <li key={skill} className="">{skill}</li>)}
          </ul>
        }
        {url &&
          <p><a href={url} target="_blank" className="underline hover:text-blue-700">{url}</a></p>
        }
        {role &&
          <p className="mb-2">{role}</p>
        }
        <Link href={`/works/${slug}`} className="p-1 border text-blue-700 border-blue-700 rounded-md self-center hover:text-white hover:bg-blue-700 mt-auto">View Details</Link>
      </div>
    </section>
  );
}

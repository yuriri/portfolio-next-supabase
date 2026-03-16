'use client'

import { useEffect, useState, useRef } from "react";
import classes from "./sections.module.css";

const SectionBlock = ({ title, children, color = "pink", className = "" }: { title: string, color?: string, children: React.ReactNode, className?: string }) => {
  const [isView, setIsView] = useState<boolean>(false);
  const animationTarget = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = animationTarget.current;
    if (!target) {
      return;
    }
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // entry.target（.js-scrollAnimation）自体にfadeInクラスを付与
          entry.target.classList.add(`${classes['is-fadeIn']}`);
          observer.unobserve(entry.target); // 一度アニメーションが発動したら監視を停止
          setIsView(true);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(target);

    return () => observer.disconnect();
  }, [animationTarget, isView]);

  let bgColor = "";
  if (color === "orange") {
    bgColor = "bg-orange-700";
  } else if (color === "blue") {
    bgColor = "bg-blue-700";
  } else if (color === "pink") {
    bgColor = "bg-pink-500";
  }

  return <section className={`${classes['section-01']} ${className}`} ref={animationTarget}>
    <h2 className="title-02"><span className={`text-white px-4 ${bgColor}`}>{title}</span></h2>
    {children}
  </section>
}

export default SectionBlock;
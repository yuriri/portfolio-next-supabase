import classes from "./hero.module.css";
import { Averia_Sans_Libre } from "next/font/google";

const averiaSans = Averia_Sans_Libre({
  weight: "400",
  variable: "--font-averia-sans",
  display: "swap",
  subsets: ["latin"],
});

export function Hero() {
  return (
    <section className={`flex h-[400px] justify-center items-center mb-16 ${classes.heroSection}`}>
      <h2 className={`${classes.heroTitle01} ${averiaSans.className} wrap-break-word`}>
        Sakai Web Portfolio
      </h2>
    </section>
  );
}

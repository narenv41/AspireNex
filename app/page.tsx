import Image from "next/image";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Start from "@/components/start";
import Experience from "@/components/exp";
import Skills from "@/components/skills";
import { Projects } from "@/components/projects";
import Footer from "@/components/footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { twMerge } from "tailwind-merge";

export const navItems = [
  { name: "Home", link: "#start" },
  { name: "Education", link: "#exp" },
  { name: "Projects", link: "#project" },
  { name: "Contact", link: "#footer" },
];

export default function Home() {
  return (
    
    <div className="relative w-full dark:bg-black bg-black h-screen dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">
      <FloatingNav navItems={navItems} />
      <Start />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
        

    </div>
  );
}

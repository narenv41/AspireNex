"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import img1 from "@/components/images/images.jpg";
import img2 from "@/components/images/sunshine.jpg";

const content = [
  {
    title: "Integrated Mtech Software Engineering",
    description:
      "As a driven third-year Int-MTech Software Engineering student at Vellore Institute Of Technology Chennai, I am fueled by a fervent desire to channel my programming acumen and academic insights into tangible real-world solutions. At the forefront of technical innovation, I proudly contribute as a dynamic member of Google Student Developer Club, where I actively learn more about the future of cloud technologies.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] relative flex items-center justify-center text-white">
        <div className="relative h-full w-full">
          <Image
            src={img1}
            layout="fill"
            objectFit="cover"
            alt="VIT"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Class 12",
    description:
      "Achieved 92% in CBSE class 12 at Sunshine Chennai Senior Secondary School",
    content: (
      <div className="h-full w-full relative flex items-center justify-center text-white">
        <div className="relative h-full w-full">
          <Image
            src={img2}
            layout="fill"
            objectFit="cover"
            alt="Sunshine"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
];

export default function exp() {
  return (
    <section id="exp">
    <div className="relative">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <StickyScroll content={content} />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    </div>
    </section>
  );
}

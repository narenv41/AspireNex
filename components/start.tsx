"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "./ui/flip-words";

const words1 = ["Resume", "Portfolio", "Achievements", "About"];

const words = [
  {
    text: "Velayudham",
    className: "text-white dark:red-red-500", // Adjusted to text-white
  },
  {
    text: "Narendharan",
    className: "text-red-500 dark:text-red-500",
  },
];

export default function Start() {
  return (
    <section id="home">
      <div className="relative bg-black-100 items-center flex-col overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

        <main className="h-screen w-screen rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-black/[0.02] relative overflow-hidden">
          <div className="text-center px-4">
            <TypewriterEffectSmooth words={words} />
            <br />
            <FlipWords words={words1} />
          </div>
        </main>
      </div>
    </section>
  );
}

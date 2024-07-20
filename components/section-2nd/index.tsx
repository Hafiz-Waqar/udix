"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardSection } from "./card-section";
import { cardData } from "./card-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Section2nd = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto mt-[65px] flex w-full max-w-[1080px] flex-col items-center gap-5 p-4 sm:mt-20 sm:p-6 md:gap-10 lg:mt-[100px]"
    >
      <h2 className="text-shadow text-center text-[28px] font-bold capitalize leading-normal tracking-tighter text-black md:text-[34px]">
        Solutions that will change your business forever
      </h2>
      <p className="max-w-[970px] text-center font-raleway text-sm leading-5 tracking-[0.72px] text-theme-black sm:leading-6 md:text-[16px] lg:leading-7">
        Some networks believe that by only offering a basic tracking system
        their affiliates can reach a high level of creativity. We like to set
        the bar a lot higher by offering you cutting-edge tech solutions
        together with a team of creative experts.
      </p>
      <div className="grid w-full grid-cols-1 justify-between gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item, index) => (
          <CardSection
            key={index}
            item={item}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
};

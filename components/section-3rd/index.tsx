"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { section3rdData } from "./data";
import { Button } from "../shared/button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Section3rd = () => {
  const counters = useRef(new Array(section3rdData.length));

  useEffect(() => {
    section3rdData.forEach((item, index) => {
      const counter = counters.current[index];

      gsap.fromTo(
        counter,
        { innerHTML: 0 },
        {
          innerHTML: item.title,
          duration: 2,
          snap: "innerHTML",
          scrollTrigger: {
            trigger: counter,
            start: "top bottom-=100", // Start animation when element enters viewport
            toggleActions: "play none none none",
          },
          ease: "power1.inOut",
          // You can add more configuration here to fit your needs
        },
      );
    });
  }, []);

  return (
    <div className="mx-5 my-[100px] h-auto min-h-[500px] bg-[url(/images/background-section.png)] bg-cover bg-center sm:mx-0 sm:px-0">
      <div className="flex h-auto min-h-[500px] items-center bg-black/[0.46] py-12">
        <div className="mx-auto flex w-full max-w-[1007px] flex-col gap-24 md:gap-[100px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {section3rdData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <h3 className="flex items-center gap-3 text-4xl font-extrabold text-white md:text-5xl lg:text-[64px]">
                  <span
                    ref={(el) => {
                      counters.current[index] = el;
                    }}
                  >
                    {item.title}
                  </span>
                  <span>{item.helpingText}</span>
                </h3>
                <p className="text-center text-xs font-medium text-white sm:text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Button
            title="Sign up now!"
            variant="primary"
            className="mx-auto !font-normal"
          />
        </div>
      </div>
    </div>
  );
};

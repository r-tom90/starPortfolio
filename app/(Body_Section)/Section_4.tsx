"use client";
import React from "react";
import Image from "next/image";
import Section1_text from "./Section1_text";
import { SectionWrapper } from "../(hoc)/index";
import { Skill_data } from "@/utils/constants";
import Skill_data_provider from "./Skill_data_provider";

function Section_4() {
  return (
    <section className=" 1300 1300:w-[1250px] h-full relative overflow-hidden  flex flex-col items-center justify-center m-auto">
      <Section1_text />

      {/* Skills tree */}
      <div className=" w-[300px] 800:w-[800px] h-auto flex flex-row items-center justify-around mt-[30px] flex-wrap gap-2 800:gap-10">
        {Skill_data.map((data: Skill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Tech Stack"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full h-full absolute  flex flex-col  items-center  justify-center">
        <div className=" w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.3] absolute flex flex-col bg-cover items-center justify-center ">
          <video
            className="w-full h-auto"
            preload="auto"
            playsInline
            loop
            muted
            // @ts-ignore
            autoPlay="autoplay"
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Section_4, "Section_4");

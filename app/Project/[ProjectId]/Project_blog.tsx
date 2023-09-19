"use client";
import React from "react";
import { useState, useEffect } from "react";
import Project_video from "./Project_video";
import Dependencies from "./Dependencies";
import Link from "next/link";
import Image from "next/image";
interface Props {
  Single_data: Project_data[];
}

function Project_blog({ Single_data }: Props) {
  const [ifreamload, setifreamload] = useState<boolean>(false);
  const [saveCopy, setSaveCopy] = useState<boolean>(false);

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    const handleLoad = () => {
      setifreamload(true);
    };
    if (iframe) {
      iframe.addEventListener("load", handleLoad, true);
    }
  }, []);

  const Copy = () => {
    setSaveCopy(true);
    navigator.clipboard.writeText(
      "yarn add @react-navigation/native-stack @react-navigation/native"
    );
  };

  console.log(Single_data[0].projectKey, "Single_data.projectKey");

  return (
    <div className=" w-full 800:w-[800px] h-auto flex flex-col  items-start justify-start px-[10px] 600:px-[15px] 800::px-0  ">
      <div className=" font-bold text-[25px] text-slate-200 mb-4">
        {Single_data[0].title}
      </div>
      {/* TODO: Add Image Carousel */}
      {Single_data[0].projectKey !== Single_data[0].project_image ? (
        <div className="relative overflow-hidden w-full frc justify-center pt-[56.25%] m-auto rounded-0 600:rounded-[8px]">
          <Image
            src={Single_data[0].project_image}
            width={1920}
            height={1080}
            alt="image"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : (
        <Project_video
          ifreamload={ifreamload}
          src={Single_data[0].projectKey}
        />
      )}
      <h2 className=" font-bold text-slate-200 text-[23px] mt-[15px] ">
        Technology & Feature
      </h2>
      <ul className="list-disc ml-[20px] mt-[10px] text-slate-200 ">
        {Single_data[0].technology_feature.map((data: string) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
      <h2 className=" my-[20px] font-bold text-slate-200 text-[23px] ">
        About this app
      </h2>
      <p className="text-gray-300 text-[15px]">
        {Single_data[0].about_this_app}
      </p>
      <Dependencies Single_data={Single_data[0]} />
      <h2
        className={`${
          Single_data[0].future_improvements ? "" : "hidden"
        } my-[20px] font-bold text-slate-200 text-[23px]`}
      >
        Future Improvements/Updates
      </h2>
      <p className="text-gray-300 text-[15px]">
        {Single_data[0].future_improvements}
      </p>
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] select-none ">
        Links
      </span>
      <div className=" w-auto h-auto flex flex-row items-center justify-start 600:justify-between  flex-wrap  ">
        {/* TODO: Change YouTube Button Link to Live */}
        {/* <a
          href={Single_data[0].live_link}
          className="px-[20px] py-[5px] mr-[10px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row active:scale-90 transition-all duration-150 select-none items-center cursor-pointer hover:bg-[#f3f3f3] "
        >
          <Image
            src={"/youtube-svgrepo-com.svg"}
            className="w-[25px] h-auto"
            width={1920}
            height={1080}
            alt=""
          />
          <span className="text-black  font-bold text-[14px] ml-[6px] ">
            Live
          </span>
        </a> */}
        <a
          href={Single_data[0].gitHub_link}
          className="px-[20px] py-[5px] mr-[10px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row active:scale-90 transition-all duration-150 select-none items-center cursor-pointer hover:bg-[#f3f3f3] "
        >
          <Image
            src={"/github-142-svgrepo-com.svg"}
            className="w-[23px] h-auto"
            width={1920}
            height={1080}
            alt=""
          />
          <span className="text-black  font-bold text-[14px] ml-[6px] ">
            Github
          </span>
        </a>
        <a
          href={Single_data[0].frontend_download_link}
          className={` ${
            Single_data[0].frontend_download_link.length ? "" : " hidden"
          } px-[20px] py-[5px] mb-[10px] 600:mb-0 rounded-[6px] bg-white mr-[10px] flex flex-row items-center active:scale-90 
          transition-all duration-150 select-none cursor-pointer hover:bg-[#f3f3f3] `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-black "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="text-black  font-bold text-[14px] ml-[6px]">
            Frontend
          </span>
        </a>
        <a
          href="https://github.com/HyatMyat4/Basic_GO_Booking_App_CLI_Project-/archive/refs/heads/main.zip"
          className={` ${
            Single_data[0].backend_download_link.length ? "" : " hidden"
          } px-[20px] py-[5px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row items-center active:scale-90 
          transition-all duration-150 select-none cursor-pointer hover:bg-[#f3f3f3] `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-black "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="text-black  font-bold text-[14px] ml-[6px]">
            Backend
          </span>
        </a>
      </div>
      <Link
        href={"/Project"}
        className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[20px] "
      >
        Go Back To
        <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
          Projects
        </span>
      </Link>
    </div>
  );
}

export default Project_blog;

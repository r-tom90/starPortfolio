import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";

// ? About Me
function page() {
  return (
    <div className="pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px]">
      <div className="w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer"
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <div className="w-full 1250:w-[900px] h-auto m-auto mt-[50px] 1250:mt-[25px] pb-[100px]">
        {/* Add Date? */}
        {/* <div className=" text-gray-400 text-[14px]">17th September 2023</div> */}
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowFade">
          Hey there, I&apos;m Richard Tom
        </div>
        <p className="text-gray-300 animate-slideRight">
          In the year 2022, I embarked on a thrilling coding journey that opened
          my eyes to the vast realm of technology. As I delved into various Web2
          platforms, it was the enchanting world of Web3, Blockchain, and Crypto
          applications that truly ignited my passion for coding. The allure of
          creating online experiences through web development captivated me with
          its boundless creativity and endless possibilities for innovation.
        </p>
        <br />

        <p className="text-gray-300 animate-slideRight">
          <span className="monospace">
            All my experience came from self-study resources such as{" "}
          </span>
          <span className="text-[#10162F] bg-[#F5FCFF] font-medium rounded px-[2px]">
            Codecademy
          </span>
          ,{" "}
          <span className="text-[#0A0A23] bg-white font-medium rounded px-[2px]">
            FreeCodeCamp
          </span>
          ,<span className="text-[#FF0000]"> Youtube</span>,
          <span className="text-[#307DEF]"> G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FDBD00]">o</span>
          <span className="text-[#307DEF]">g</span>
          <span className="text-[#2DA94F]">l</span>
          <span className="text-[#EA4335]">e</span> ,
          <span className=" text-[#F47F24]"> Stack Overflow</span> and tools
          like
          <span className=" text-[#00A67E]"> ChatGPT</span>.
        </p>
        <br />
        <div className="text-gray-300  animate-slideRight">
          I have combined my years of blockchain expertise as a user and current
          coding skills to work alongside others on the construction of
          real-world applications.
        </div>
        <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowFade">
          Development Experience ⏳
        </div>
        <div className="mt-4 animate-slideRight">
          I&apos;m a skilled web developer with experience in{" "}
          <span className=" text-[#F0DB4F]"> JavaScript</span>,
          <span className=" text-[#007ACC] ">TypeScript</span>,
          <span className=" text-gray-400"> Solidity</span> and expertise in
          libraries/frameworks like{" "}
          <span className=" text-[#61DBFB]">React</span>,{" "}
          <span className="  text-[#3C873A]"> Node.js</span>,
          <span className="  text-[#2535A0]"> ethers.js</span>, and{" "}
          <span className="text-black bg-white font-semibold rounded px-[2px]">
            NextJS
          </span>
          . I&apos;m a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems.
        </div>
        <div className="w-full h-auto font-bold text-lg mb-[15px] mt-[35px] text-slate-200 animate-slowFade">
          Let&apos;s work together to bring your ideas to life!
        </div>
        <Link
          href={"/Project"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          Go Back To
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Projects
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;

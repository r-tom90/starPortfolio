"use client";
import React from "react";
import { setChooseOption } from "../../Redux-store/Redux-action";
import { useDispatch, useSelector } from "react-redux";
import { ChooseOption_data } from "../../Redux-store/Redux-action";
import Scale_Image from "../(Body_Section)/(ScaleImg)/Scale_Image";
import { Image_src_data } from "../../Redux-store/Redux-action";
interface Props {
  data: string;
  isMobile: boolean;
}
function ActiveNav() {
  const dispatch = useDispatch();
  const NavTag = useSelector(ChooseOption_data);
  const ImageSrc = useSelector(Image_src_data);
  return (
    <div className=" w-full h-[100px] 340:h-[70px] flex flex-row flex-wrap items-center text-gray-200  select-none justify-around">
      {/* TODO: Find Logo to use? */}
      {/* {ImageSrc.data ? <Scale_Image src_data={ImageSrc} /> : <div></div>} */}
      <div
        onClick={() => dispatch(setChooseOption("All"))}
        className={` ${
          NavTag === "All" ? "  text-sky-500  scale-110  " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0 text-[13px] 600:text-[15px] flex flex-col items-center `}
      >
        All
      </div>
      <div
        onClick={() => dispatch(setChooseOption("React (Vite)"))}
        className={` ${
          NavTag === "NextJS 13" ? "  text-sky-500   scale-110" : ""
        } hover:text-sky-500 cursor-pointer text-[13px] mx-[5px] 340:mx-0  ml-[10px] 600:text-[15px]`}
      >
        React
      </div>
      <div
        onClick={() => dispatch(setChooseOption("NextJS 13"))}
        className={` ${
          NavTag === "NextJS 13" ? "  text-sky-500   scale-110" : ""
        } hover:text-sky-500 cursor-pointer text-[13px] mx-[5px] 340:mx-0  ml-[10px] 600:text-[15px]`}
      >
        NextJS 13
      </div>
      {/* <div
        onClick={() => dispatch(setChooseOption("React Native"))}
        className={` ${
          NavTag === "React Native" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        React Native
      </div> */}
      {/* <div
        onClick={() => dispatch(setChooseOption("ThreeJS"))}
        className={` ${
          NavTag === "ThreeJS" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        ThreeJS
      </div> */}
      <div
        onClick={() => dispatch(setChooseOption("server"))}
        className={` ${
          NavTag === "React" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        All server
      </div>
    </div>
  );
}

export default ActiveNav;

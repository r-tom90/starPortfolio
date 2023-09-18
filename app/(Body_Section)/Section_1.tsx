"use client";
import React from "react";
import SignUpProvider from "./SignupProvider";
import Section_2 from "./Section_2";
import {
  SignUp_data,
  Image_src_data,
  MobileMenu_data,
} from "../../Redux-store/Redux-action";
import { useSelector, useDispatch } from "react-redux";
import Scale_Image from "./(ScaleImg)/Scale_Image";
import { useEffect } from "react";
import { setStarMode, setStarColor } from "../../Redux-store/Redux-action";
import MobileMenu from "./(MobileMenu)/MobileMenu";
interface Props {
  data: string;
  isMobile: boolean;
}

function Section_1() {
  const dispatch = useDispatch();
  const SignUp: boolean = useSelector(SignUp_data);
  const Mobile_menu: boolean = useSelector(MobileMenu_data);
  const ImageSrc: Props = useSelector(Image_src_data);

  useEffect(() => {
    const havestarMode = localStorage.getItem("starMode");
    const colour = localStorage.getItem("colour");
    if (
      havestarMode === "" ||
      havestarMode === null ||
      havestarMode === undefined ||
      colour === "" ||
      colour === undefined ||
      colour === null
    ) {
      localStorage.setItem("starMode", "active");
      localStorage.setItem("colour", "#4d7c0f");
    } else {
      dispatch(setStarMode(havestarMode));
      dispatch(setStarColor(colour));
    }
  }, []);

  return (
    <section className=" w-full h-[940px] shadow-lg shadow-[#030014]/50 relative bg-[url('/main.svg')] bg-cover flex flex-col overflow-hidden  items-center justify-start  px-[15px] ">
      <div className=" w-[1250px] h-full z-[-10] absolute top-[-280px]  flex flex-row   items-start justify-center ">
        <video
          className="w-full h-auto rotate-180  "
          preload="auto"
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src="/q-c3d7becf.webm"
        ></video>
      </div>
      <Section_2 />
      {SignUp ? <SignUpProvider /> : <div></div>}
      {Mobile_menu ? <MobileMenu /> : <div></div>}
      {ImageSrc.data ? <Scale_Image src_data={ImageSrc} /> : <div></div>}
    </section>
  );
}

export default Section_1;

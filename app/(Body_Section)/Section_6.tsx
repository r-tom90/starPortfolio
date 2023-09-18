import React from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "./Technology_tag";
import { Project } from "../../utils/constants";
import Projectcard_Web from "./(ProjectCard)/Projectcard_Web";
import Projectcard_Mobile from "./(ProjectCard)/Projectcard_Mobile";
import ContactForm from "./Contact";
function Contact() {
  return (
    <div
      id="contact"
      className=" w-full 1300:w-[1250px] z-10 h-auto relative m-auto flex flex-col items-center justify-center overflow-hidden pb-[50px] "
    >
      <div className=" w-full 840:w-[830px] 1250:w-full h-auto flex flex-col  items-start justify-center my-[15px] px-[15px] 1300:px-[10px] pb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  font-semibold text-[20px] ">
          Contact
        </span>
        <span className=" font-bold text-[30px] text-white ">
          Have a burning question?
        </span>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;

import React from "react";
import Section_1 from "../(Body_Section)/Section_1";
import Section_3 from "../(Body_Section)/Section_3";
import Section_4 from "../(Body_Section)/Section_4";
import Section_5 from "../(Body_Section)/Section_5";
import Section_6 from "../(Body_Section)/Section_6";

function Home_Body() {
  return (
    <div className=" w-auto h-auto m-auto ">
      <Section_1 />
      <Section_4 />
      <Section_3 />
      <Section_5 />
      <Section_6 />
    </div>
  );
}

export default Home_Body;

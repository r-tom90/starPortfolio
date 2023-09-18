"use client";
import Home_Body from "./(Home_Body)/Home_Body";
import Footer from "./(Footer)/Footer";
import { SignUp_data } from "../Redux-store/Redux-action";
import { useSelector } from "react-redux";
export default function Home() {
  const SignUp = useSelector(SignUp_data);
  return (
    <main
      className={`w-full ${
        SignUp ? " h-[940px] overflow-hidden" : "  h-screen "
      }   `}
    >
      <Home_Body />
      <Footer />
    </main>
  );
}

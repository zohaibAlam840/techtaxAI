"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LandingPage from "./Home/page";

export default function Home() {
  const route = useRouter();
  return (
    <>
      <LandingPage />
      {/* {route.push("/dashboard")} */}
    </>
  );
}

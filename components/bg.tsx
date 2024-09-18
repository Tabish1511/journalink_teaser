"use client";
import React from "react";
import { BackgroundBeams } from "../components/background-beams";
import { CoverDemo } from "./warp";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 flex antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <CoverDemo />
      </div>
      <div className="flex flex-col justify-center align-center">
      <BackgroundBeams />
      comming soon
      </div>
    </div>
  );
}














{/* <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex  items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <CoverDemo />
      </div>
      <BackgroundBeams />
    </div> */}
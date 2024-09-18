"use client";
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "../components/background-beams";
import { CoverDemo } from "./warp";
import { TextGenerateEffectDemo } from "./comingSoon";

export function BackgroundBeamsDemo() {
    const [showTextGenerateEffect, setShowTextGenerateEffect] = useState(false);  

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowTextGenerateEffect(true);
        }, 2000); // 2000 milliseconds = 2 seconds
    
        return () => clearTimeout(timer); // Cleanup the timer
      }, []);

    return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 flex antialiased">
        <div className="max-w-4xl mx-auto p-4 flex flex-col items-center">
        <CoverDemo />
        {showTextGenerateEffect && (
          <div className="text-center mt-4">
            <TextGenerateEffectDemo />
          </div>
        )}
        </div>
        <BackgroundBeams />
    </div>
    );
}














{/* <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex  items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <CoverDemo />
      </div>
      <BackgroundBeams />
    </div> */}
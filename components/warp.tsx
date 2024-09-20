import React from "react";
import { Cover } from "@/components/cover";
import { TextFloat } from "./textFloat";
import SparklesText from "./magicui/sparkles-text";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-20 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <SparklesText text="JOURNALINK" className="text-neutral-400" sparklesCount={5} /> takes ideation through <Cover>warp speed</Cover>
      </h1>
    </div>
  );
}

















// import React from "react";
// import { Cover } from "@/components/cover";
// import { TextFloat } from "./textFloat";
// import SparklesText from "./magicui/sparkles-text";

// export function CoverDemo() {
//   return (
//     <div>
//       <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
//         <SparklesText text="JOURNALINK" className="text-white" sparklesCount={20} /> <TextFloat text={"Journalink"} /> takes ideation through <Cover>warp speed</Cover>
//       </h1>
//     </div>
//   );
// }

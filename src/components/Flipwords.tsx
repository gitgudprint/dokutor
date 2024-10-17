import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Chat With", "Ask", "Understand"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} /> <br />
            your document.
      </div>
    </div>
  );
}

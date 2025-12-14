"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_01() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <div className="relative w-full">
        <Textarea
          id="ai-input-01"
          placeholder="Type your message..."
          className={cn(
            "w-full bg-black/5 dark:bg-white/5 rounded-full pl-8 pr-28",
            "placeholder:text-black/50 dark:placeholder:text-white/50",
            "!border-none !ring-offset-0",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "!focus-visible:outline-none !focus-visible:ring-0 !focus-visible:ring-offset-0",
            "transition-[height] duration-100 ease-out",
            "!leading-[1.2] !py-[16px]",
            "!min-h-[52px]",
            "!max-h-[200px]"
          )}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleReset();
            }
          }}
          rows={1}
        />

        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 p-2 transition-all duration-200",
            inputValue ? "right-14" : "right-3"
          )}
        >
          <Mic className="w-4 h-4 text-black/70 dark:text-white/70" />
        </div>
        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 p-2 transition-all duration-700",
            inputValue
              ? "block right-3 cursor-pointer"
              : "hidden"
          )}
        >
          <CornerRightUp className="w-4 h-4 text-black/70 dark:text-white/70 transition-opacity duration-700" />
        </button>
      </div>
    </div>
  );
}
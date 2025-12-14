"use client";

import {motion} from "motion/react";
import Image from "next/image";
import Nextjs from "../icons/nextjs";
import ReactIcon from "../icons/react";
import ShadcnIcon from "../icons/shadcn";
import Motion from "../icons/motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Features = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const handleMouseEnter = (iconName: string) => {
    setHoveredItem(iconName)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null);
  }
  return (
    <div className="w-full max-w-none flex flex-col justify-start items-center z-10 mx-auto select-none">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap items-center justify-start gap-6 md:gap-8 w-[95%] mx-auto py-4">

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                          duration: 0.3,
                          delay: 0.1,
                          ease: [0.23, 1, 0.32, 1],
                      }}
                      animate={{
                          scale: hoveredItem === "TailwindCSS" ? 1.05 : 1,
                      }}
                      className={cn(
                          "text-blue-600 dark:text-blue-400 relative flex flex-col items-center gap-3 cursor-pointer",
                          "bg-gray-100/80 dark:bg-zinc-800/50 backdrop-blur-md",
                          "border border-gray-300/60 dark:border-zinc-700/60",
                          "rounded-xl px-5 py-4",
                          "shadow-lg dark:shadow-xl",
                          "hover:shadow-xl dark:hover:shadow-2xl",
                          "transition-all duration-300",
                          "w-full md:w-auto"
                      )}
                      onMouseEnter={() => handleMouseEnter("TailwindCSS")}
                      onMouseLeave={handleMouseLeave}
                  >
                      <svg
                          viewBox="0 0 54 33"
                          className="w-8 h-8"
                          aria-labelledby="tailwindcss-icon-title"
                          role="img"
                      >
                          <title id="tailwindcss-icon-title">TailwindCSS</title>
                          <g clipPath="url(#prefix__clip0)">
                              <path
                                  fill="#38bdf8"
                                  fillRule="evenodd"
                                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                                  clipRule="evenodd"
                              />
                          </g>
                      </svg>
                      <motion.span
                          animate={{
                              scale: hoveredItem === "TailwindCSS" ? 1.05 : 1,
                              fontWeight:
                                  hoveredItem === "TailwindCSS" ? 500 : 400,
                          }}
                          transition={{
                              duration: 0.3,
                              ease: [0.34, 1.56, 0.64, 1],
                          }}
                          className="text-xs text-center whitespace-nowrap text-black dark:text-white"
                      >
                          TailwindCSS
                      </motion.span>
                  </motion.div>

                             
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.5,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    animate={{
                        scale: hoveredItem === "Shadcn UI" ? 1.05 : 1,
                    }}
                    className={cn(
                        "text-black dark:text-white flex flex-col items-center gap-3 relative cursor-pointer",
                        "bg-gray-100/80 dark:bg-zinc-800/50 backdrop-blur-md",
                        "border border-gray-300/60 dark:border-zinc-700/60",
                        "rounded-xl px-5 py-4",
                        "shadow-lg dark:shadow-xl",
                        "hover:shadow-xl dark:hover:shadow-2xl",
                        "transition-all duration-300",
                        "w-full md:w-auto"
                    )}
                    onMouseEnter={() => handleMouseEnter("Shadcn UI")}
                    onMouseLeave={handleMouseLeave}
                >
                    <ShadcnIcon
                        className="w-8 h-8 text-black dark:text-white"
                        aria-label="Shadcn/ui"
                    />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "Shadcn UI" ? 1.05 : 1,
                            fontWeight: hoveredItem === "Shadcn UI" ? 500 : 400,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.34, 1.56, 0.64, 1],
                        }}
                        className="text-xs text-center whitespace-nowrap"
                    >
                        shadcn/ui
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.6,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    animate={{
                        scale: hoveredItem === "Next.js" ? 1.05 : 1,
                    }}
                    className={cn(
                        "text-black dark:text-white flex flex-col items-center gap-3 relative cursor-pointer",
                        "bg-gray-100/80 dark:bg-zinc-800/50 backdrop-blur-md",
                        "border border-gray-300/60 dark:border-zinc-700/60",
                        "rounded-xl px-5 py-4",
                        "shadow-lg dark:shadow-xl",
                        "hover:shadow-xl dark:hover:shadow-2xl",
                        "transition-all duration-300",
                        "w-full md:w-auto"
                    )}
                    onMouseEnter={() => handleMouseEnter("Next.js")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Nextjs className="w-8 h-8" aria-label="Next.js" />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "Next.js" ? 1.05 : 1,
                            fontWeight: hoveredItem === "Next.js" ? 500 : 400,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.34, 1.56, 0.64, 1],
                        }}
                        className="text-xs text-center whitespace-nowrap"
                    >
                        Next.js
                    </motion.span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.7,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    animate={{
                        scale: hoveredItem === "React" ? 1.05 : 1,
                    }}
                    className={cn(
                        "text-black dark:text-white flex flex-col items-center gap-3 relative cursor-pointer",
                        "bg-gray-100/80 dark:bg-zinc-800/50 backdrop-blur-md",
                        "border border-gray-300/60 dark:border-zinc-700/60",
                        "rounded-xl px-5 py-4",
                        "shadow-lg dark:shadow-xl",
                        "hover:shadow-xl dark:hover:shadow-2xl",
                        "transition-all duration-300",
                        "w-full md:w-auto"
                    )}
                    onMouseEnter={() => handleMouseEnter("React")}
                    onMouseLeave={handleMouseLeave}
                >
                    <ReactIcon className="w-8 h-8" aria-label="React" />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "React" ? 1.05 : 1,
                            fontWeight: hoveredItem === "React" ? 500 : 400,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.34, 1.56, 0.64, 1],
                        }}
                        className="text-xs text-center whitespace-nowrap"
                    >
                        React
                    </motion.span>
                </motion.div>
      </div>
      
    </div>
  )
}

export default Features
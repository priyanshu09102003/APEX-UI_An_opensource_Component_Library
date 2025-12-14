"use client";

import React from 'react'
import { motion } from "motion/react"
import { Sparkles } from 'lucide-react';
import TailwindCss from '../icons/TailwindCss';
import { BrowseComponentsButton } from '../ui/BrowseButton';
import { DeveloperButton } from '../ui/DeveloperButton';
import Features from './Features';
import Link from 'next/link';
import Card08 from '../apexUi/card/card-08';
import ActionSearchBar from '../apexUi/action-search-bar';
import Card02 from '../apexUi/card/card-02';
import AIInput_04 from '../apexUi/ai-input/ai-input-04';
import { Btn14 } from '../apexUi/button/btn-14';
import Btn03 from '../apexUi/button/btn-03';
import Input09 from '../apexUi/input/input-09';


export function HeroSection () {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Left Side - Title and CTA */}

        <div className='w-full lg:w-[45%] flex-col items-start text-left space-y-8 lg:-mt-30'> 

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                    Craft with{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
                    Precision
                    </span>
                    <br />
                    Build with{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">
                    Ease
                    </span>
                    .
                </h1>

                <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">

                    An curated collection of {" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-[glow_3s_ease-in-out_infinite] font-semibold">Premium UI components</span>
                    {" "}crafted with{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-400">
                        Tailwind CSS
                    </span>{" "}and{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">shadcn/ui </span>{" "} for modern applications.
                </p>

            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-start w-full"
            >

                <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2">
                    <TailwindCss className="w-4 h-4" />

                    <span className="flex items-center gap-1.5">
                        Now updated for Tailwind CSS v4.0!

                        <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                            <Sparkles className="h-3 w-3 mr-1" />
                            New     
                        </span>
                    </span>

                </span>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
                    <BrowseComponentsButton/>
                    <DeveloperButton />

                </div>

            </motion.div>

            <Features/>

        </div>


        {/* Right Side - Components showdown */}

        <div className='w-full lg:w-[55%] flex-col flex justify-between gap-6 lg:pl-8'>

            {/* Top row */}

            <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
            >
                {/* Card Component */}

                <div className='w-full flex flex-col items-center justify-center'>
                    <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-[glow_3s_ease-in-out_infinite] text-center mb-2 font-semibold">

                       Premium Cards
                    </span>

                    <Card08 />

                </div>

                {/* Action Search Bar */}

                <div className="w-full max-w-[600px] bg-transparent">
                    <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-[glow_3s_ease-in-out_infinite] text-center mb-2 font-semibold">
                        Luxury Components
                    </span>

                    <ActionSearchBar />
                    <Card02 />

                </div>

            </motion.div>

             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
            >

                <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-[glow_3s_ease-in-out_infinite] text-center mb-2 block font-semibold">
                    AI Chat
                </span>

                <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <AIInput_04 />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                {/* Left side - Buttons */}
                <div className="w-full">
                    <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-[glow_3s_ease-in-out_infinite] text-center mb-2 block font-semibold">
                     Elegant Buttons
                    </span>
                    <div className="w-full h-48 rounded-xl  border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-3">
                    <Link href="/docs/components/button">
                        <Btn14 label='Explore' className='w-42 py-5' />
                    </Link>
                    <Link href="/docs/components/button">
                        <Btn03 className=" w-42 py-5" />
                    </Link>
                    </div>
                </div>

                {/* Right side - Input */}
                <div className="w-full">
                    <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-[glow_3s_ease-in-out_infinite] text-center mb-2 block font-semibold">
                     Smart Inputs
                    </span>
                    <Link href="/docs/components/input">
                    <Input09 />
            </Link>
          </div>
        </motion.div>

        </div>
      
    </div>
  )
}


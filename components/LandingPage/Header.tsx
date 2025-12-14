import {  PaletteIcon, PartyPopperIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Link as ViewTransitionsLink } from 'next-view-transitions'
import { ThemeToggle } from '../Layout/ThemeToggle'

const Header = () => {
  return (
    <>

        {/* Header for mobile devices */}

        <div className="sm:hidden w-full p-2.5 bg-white dark:bg-black/5">

            <Link href={"#"} className="flex items-center justify-center gap-2">

                <span className='flex items-center gap-2'>

                    <PartyPopperIcon className="w-3.5 h-3.5" />
                    <span className='text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text font-semibold'>
                        An open-source Component Library
                    </span>
                </span>
            
            </Link>

        </div>


        {/* Header for Desktop */}

        <div className='sticky top-0 left-0 right-0 z-50 sm:h-[20vh]'>

            <div className='bg-white dark:bg-black/5 w-full'>

                <div className='flex items-center justify-center w-full flex-col'>
                    <div

                        className={`
                            flex items-center justify-between
                            bg-linear-to-b from-white/90 via-gray-50/90 to-white/90
                            dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                            shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                            backdrop-blur-md
                            border-x border-b 
                            border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                            w-full sm:min-w-[800px] sm:max-w-[1200px]
                            rounded-b-[28px]
                            px-4 py-2.5
                            relative
                            transition-all duration-300 ease-in-out
                        `}
                    >

                        <div className='relative z-10 flex items-center justify-between w-full gap-2'>

                            {/* Logo Section */}
                            <div className='flex items-center gap-6'>

                                <Link href={'/'} className='flex items-center gap-2 '>
                                    <PaletteIcon className='w-6 h-6 text-green-500 dark:text-green-400' />
                                    <span className='font-semibold'>Apex UI</span>
                                </Link>

                                <span className='text-zinc-400 dark:text-zinc-500'>|</span>

                                {/* Desktop Navigations */}

                                <div className='flex items-center gap-4'>

                                    <ViewTransitionsLink
                                    href={"/docs/components/background-paths"}
                                    className='text-sm text-zinc-600 hover:text-zinc-900 dark:textext-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors'
                                    >
                                        Components

                                    </ViewTransitionsLink>

                                    <ViewTransitionsLink
                                    href={"/pricing"}
                                    className='text-sm text-zinc-600 hover:text-zinc-900 dark:textext-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors'
                                    >
                                        Pricing

                                    </ViewTransitionsLink>

                                </div>

                            </div>

                            {/* Right Side Items */}

                            <div className='flex items-center gap-3'>

                                <span className='text-zinc-400 dark:text-zinc-500'>
                                    |
                                </span>

                                <ThemeToggle/>

                            </div>



                        </div>

                    </div>

                </div>

            </div>

        </div>
    
    </>
  )
}

export default Header
import Link from "next/link";
import { ArrowRight, Github, Zap } from "lucide-react";
import AIInput_04 from "../apexUi/ai-input/ai-input-04";


function Header() {
    return (
        <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-pink-500 dark:from-amber-400 dark:to-pink-400">
                    Build Beautiful Interfaces
                </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A collection of UI components that you can copy and paste into
                your apps.
            </p>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-[glow_3s_ease-in-out_infinite] text-center mb-2 font-bold">
                Accessible. Open Source.
            </p>
        </div>
    );
}

interface BuildInterfacesCardProps {
    className: string;
}

export function BuildInterfacesCard({ className }: BuildInterfacesCardProps) {
    return (
        <div className={className}>
            <div className="h-full flex flex-col justify-between">
                <Header />
                <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        
                    </p>
                        <AIInput_04 />
                   
                </div>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    <Link
                        href="/docs"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                            bg-linear-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-200
                            text-white dark:text-zinc-900 
                            hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-100/20
                            transition-all duration-200 ease-in-out"
                    >
                        <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        <span className="font-medium">Explore Components</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="https://github.com/priyanshu09102003/APEX-UI_An_opensource_Component_Library"
                        target="_blank"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                            border border-zinc-200 dark:border-zinc-800
                            hover:bg-zinc-100 dark:hover:bg-zinc-800/50
                            hover:shadow-lg hover:shadow-zinc-900/10 dark:hover:shadow-zinc-100/10
                            transition-all duration-200"
                    >
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">View on GitHub</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
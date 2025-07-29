import { ArrowDownToLine, ArrowUpFromLine, Sparkles, Pyramid } from "lucide-react";
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react";
import WishListDialog from "@/components/landing_page/WishListDialog";
import { Button } from "@/components/ui/button";

function Home() {
    const [isDialogOpen, updateIsDialogOpen] = useState(false)
    return (
        <div className={`w-full ${isDialogOpen ? "overflow-hidden" : "overflow-auto"}`}>
            <AnimatePresence>
                {isDialogOpen && (
                    <motion.div 
                        className="absolute z-40 w-full h-screen bg-black/80 flex items-center justify-center"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        <WishListDialog onExit={() => updateIsDialogOpen(!isDialogOpen)}/>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="w-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-16 items-center h-full py-8 px-20">
                    <div className="text-6xl lg:text-7xl font-semibold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        <h1>
                            Rethink How You Design. Build without Guessing.
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                          AI-powered UI/UX guidance that aligns with your brand and vision—without hiring a designer
                        </p>
                        <Button 
                            onClick={() => updateIsDialogOpen(!isDialogOpen)}
                            className="bg-[#413f9a] text-white px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer h-16"
                        >
                          Join Early Access
                        </Button>
                    </div>
                    <div className=""> {/* preview of the interface */}

                    </div>
                </div>
            </div>
            <div className="px-20 pb-10">
                <div className="w-[500px]">
                    <p className="text-white text-4xl font-semibold">
                        Freelancers and Startups Deserve Better Design Tools
                    </p>
                    <p className="text-gray-300 py-3.5 text-lg">
                        Missed deadlines. Half-baked UI. Low ratings. Startups with zero design budget. We've all been there. Prism fixes this by cutting through the noise.
                    </p>
                </div>
            </div>
            <div className="flex px-20 py-10 gap-5">
                <div className="flex-1 h-72 rounded-xl border-2 border-gray-800 flex flex-col gap-3.5 items-center justify-center p-4">
                    <div className="p-3.5 bg-gray-900 rounded-2xl bg-opacity-70">
                        <ArrowUpFromLine color="white" size={52} className=""/>
                    </div>
                    <p className="text-2xl font-semibold text-white">
                        Upload or Start from Scratch
                    </p>
                    <p className="text-gray-300 text-lg text-center">
                        Upload an existing design or create a new one with AI
                    </p>
                </div>
                <div className="flex-1 h-72 rounded-xl border-2 border-gray-800 flex flex-col gap-3.5 items-center justify-center p-4">
                    <div className="p-3.5 bg-blue-900/30 rounded-2xl">
                        <Sparkles size={52} className="text-blue-800"/>
                    </div>
                    <p className="text-2xl font-semibold text-white">
                        AI Analyzes Your UI
                    </p>
                    <p className="text-gray-300 text-lg text-center">
                        Get instant feedback on branding adherence and UX improvements
                    </p>
                </div>
                <div className="flex-1 h-72 rounded-xl border-2 border-gray-800 flex flex-col gap-3.5 items-center justify-center p-4">
                    <div className="p-3.5 bg-gray-900 rounded-2xl bg-opacity-70">
                        <ArrowDownToLine  color="white" size={52} className=""/>
                    </div>
                    <p className="text-2xl font-semibold text-white">
                        Export Polished Designs
                    </p>
                    <p className="text-gray-300 text-lg text-center">
                        Download refined designs that align with your project's vision
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
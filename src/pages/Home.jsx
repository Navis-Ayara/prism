import { ArrowDownToLine, ArrowUpFromLine, Sparkles, Pyramid } from "lucide-react";
import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router";
import { useState } from "react";
import WishListDialog from "@/components/landing_page/WishListDialog";
import { Button } from "@/components/ui/button";

function Home() {
    const [isDialogOpen, updateIsDialogOpen] = useState(false)
    return (
        <div className={`w-full bg-[#090a0d] z-10 h-screen ${isDialogOpen ? "overflow-hidden" : "overflow-auto"}`}>
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
            <div className="w-full h-screen flex flex-col">
                <div className="flex gap-2.5 p-5 items-center">
                    <Pyramid size={32} strokeWidth={2.5} color="white" />
                    <span className="text-white text-3xl font-semibold">Prism</span>
                </div>
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
            <footer className="border-t border-gray-800 px-20 py-12">
                <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                        <Pyramid size={24} strokeWidth={2.5} color="white" />
                        <span className="text-white text-xl font-semibold">Prism</span>
                    </div>
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-semibold">Product</h3>
                            <Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-semibold">Company</h3>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-semibold">Support</h3>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center text-gray-400 text-sm">
                    <p>&copy; 2025 Prism. All rights reserved.</p>
                    {/* <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div> */}
                </div>
            </footer>
        </div>
    )
}

export default Home;
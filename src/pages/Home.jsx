import { ArrowDownToLine, ArrowUpFromLine, Sparkles } from "lucide-react";

function Home() {
    return (
        <div className="w-full bg-[#090a0d]">
            <div className="w-full h-screen flex flex-col">
                <div className="flex gap-2.5 p-5">
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
                        <button className="bg-[#413f9a] text-white px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer">
                          Join Early Access
                        </button>
                    </div>
                    <div className="">

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
                <div className="flex-1 h-72 rounded-xl border-2 border-accent-foreground flex flex-col gap-3.5 items-center justify-center p-4">
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
                <div className="flex-1 h-72 rounded-xl border-2 border-accent-foreground flex flex-col gap-3.5 items-center justify-center p-4">
                    <div className="p-3.5 bg-gray-900 rounded-2xl bg-opacity-70">
                        <Sparkles size={52} className="text-blue-800"/>
                    </div>
                    <p className="text-2xl font-semibold text-white">
                        AI Analyzes Your UI
                    </p>
                    <p className="text-gray-300 text-lg text-center">
                        Get instant feedback on branding adherence and UX improvements
                    </p>
                </div>
                <div className="flex-1 h-72 rounded-xl border-2 border-accent-foreground flex flex-col gap-3.5 items-center justify-center p-4">
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
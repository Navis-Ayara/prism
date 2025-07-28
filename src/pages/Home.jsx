function Home() {
    return (
        <div className="w-full h-fit bg-black">
            <div className="w-full h-screen flex flex-col">
                <div className="flex gap-2.5 p-5">
                    <span className="text-white text-3xl font-semibold">Prism</span>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center h-full py-8">
                    <div className="text-6xl lg:text-7xl font-semibold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        <h1>
                            Rethink How You Design. Build without Guessing.
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                          AI-powered UI/UX guidance that aligns with your brand and vision—without hiring a designer
                        </p>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-blue-500/25">
                          Join Early Access &gt;
                        </button>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
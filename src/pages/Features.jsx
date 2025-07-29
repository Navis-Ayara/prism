import { Pyramid } from "lucide-react";
import { Link } from "react-router";

function Features() {
    return (
        <div className="w-full bg-[#090a0d] z-10 h-screen overflow-auto">
            <div className="w-full h-screen flex flex-col">
                <div className="flex gap-2.5 p-5 items-center">
                    <Pyramid size={32} strokeWidth={2.5} color="white" />
                    <span className="text-white text-3xl font-semibold">Prism</span>
                </div>
                <div className="flex-grow px-20 py-8">
                    <h1 className="text-6xl font-semibold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Features
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-lg mt-4">
                        This is the features page. More content will be added here soon.
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
                </div>
            </footer>
        </div>
    )
}

export default Features;

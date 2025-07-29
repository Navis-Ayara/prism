import { Pyramid } from "lucide-react";
import { Link } from "react-router";

function Footer() {
    return (
        <footer className="border-t border-gray-800 px-20 py-12">
            <div className="flex justify-between items-start">
                <Link to="/" className="flex gap-2 items-center">
                    <Pyramid size={24} strokeWidth={2.5} color="white" />
                    <span className="text-white text-xl font-semibold">Prism</span>
                </Link>
                <div className="flex gap-12">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white font-semibold">Product</h3>
                        <Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
                        <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white font-semibold">Company</h3>
                        <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                        <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white font-semibold">Support</h3>
                        <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                        <Link to="/status" className="text-gray-400 hover:text-white transition-colors">Status</Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center text-gray-400 text-sm">
                <p>&copy; 2025 Prism. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

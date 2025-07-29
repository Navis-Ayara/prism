import { X, Mail, User, Building } from "lucide-react";

function WishListDialog({ onExit }) {
    return (
        <div className="w-96 bg-[#090a0d] rounded-2xl border-gray-800 border-2 p-8 relative">
            <button
                onClick={onExit}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
                <X size={20} />
            </button>
            
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">Join the Waitlist</h2>
                <p className="text-gray-400 text-sm">Get early access to Prism and be among the first to transform your design workflow.</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                    </label>
                    <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#413f9a] transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="email"
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#413f9a] transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company (Optional)
                    </label>
                    <div className="relative">
                        <Building size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#413f9a] transition-colors"
                            placeholder="Your company name"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        What describes you best?
                    </label>
                    <select className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-[#413f9a] transition-colors">
                        <option value="">Select your role</option>
                        <option value="developer">Developer</option>
                        <option value="founder">Founder/Entrepreneur</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="designer">Designer</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex gap-3 pt-4">
                    <button
                        type="button"
                        onClick={onExit}
                        className="flex-1 bg-transparent border border-gray-600 text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-800/50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="flex-1 bg-[#413f9a] text-white py-3 rounded-lg font-medium hover:bg-[#524fb3] transition-colors"
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WishListDialog;
import { Pyramid } from "lucide-react";
import { Link } from "react-router";

function Header() {
    return (
        <Link to="/" className="flex gap-2.5 p-5 items-center">
            <Pyramid size={32} strokeWidth={2.5} color="white" />
            <span className="text-white text-3xl font-semibold">Prism</span>
        </Link>
    );
}

export default Header;

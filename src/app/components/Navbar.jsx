import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=" bg-white " style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <nav className="flex justify-between items-center px-6 py-6 w-full">
                {/* Left: Logo / Title */}
                <div>
                    <h1 className="text-black font-bold text-2xl  hover:text-gray-700 ">yuhnie!!</h1>
                </div>

                {/* Center: Links */}
                <div className="flex gap-6 text-lg ">
                    <Link className="text-black hover:text-gray-700" href="/">Home</Link>
                    <Link className="text-black hover:text-gray-700" href="/about">About</Link>
                    <Link className="text-black hover:text-gray-700" href="/features">Features</Link>
                    <Link className="text-black hover:text-gray-700" href="/contact">Contact</Link>
                </div>

                {/* Right: Buttons */}
                <div className="flex gap-2">
                    <Link href="/login">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

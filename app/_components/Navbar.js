import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    Portfolio Hub
                </div>
                <div className="flex space-x-4">
                    <Link href="/sign-up" className="text-white hover:text-gray-300">
                        Sign Up
                    </Link>
                    <Link href="/sign-in" className="text-white hover:text-gray-300">
                        Sign in
                    </Link>
                    <Link href="/dashboard" className="text-white hover:text-gray-300">
                        Create
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

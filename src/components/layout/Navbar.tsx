import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, LogInIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 bg-slate-50 shadow-lg backdrop-blur-sm ">
            <nav className="flex justify-between items-center py-2">
                <Link href="/" className="text-xl font-bold">
                    {/* <Image src="/logo.svg" alt="Logo" width={100} height={50} className="relative object-contain" /> GROWCERIA */}
                    GROWCERIA
                </Link>
                <div className="flex items-center">
                    <Input type="search" placeholder="Search anything you want.." className="w-[700px]" />
                    <Button variant="outline" className="ml-2">
                        <Search />
                    </Button>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div>
                        <Link href="/register" className="text-sm">Register</Link>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Button variant="outline" className="ml-2">
                            <ShoppingCart />
                        </Button>
                        <Button variant="outline" className="px-4 py-4 flex justify-center items-center gap-2">
                            <LogInIcon /> <span>Sign In</span>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasket, LogInIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4">
            <nav className="flex justify-between items-center py-2">
                <Link href="/" className="text-xl font-bold">
                    <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                </Link>
                <div className="flex items-center">
                    <Input type="search" placeholder="Search" />
                    <Button variant="outline" className="ml-2">
                        <Search />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="ml-2">
                        <ShoppingBasket />
                    </Button>
                    <Button variant="outline" className="px-4 py-4 flex justify-center items-center gap-2">
                        <LogInIcon /> <span>Sign In</span>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
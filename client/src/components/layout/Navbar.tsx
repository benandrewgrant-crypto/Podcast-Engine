import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Company", href: "#" },
    { name: "Services", href: "#" },
    { name: "Pricing", href: "/" },
    { name: "Case Studies", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-black text-white py-6 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md relative">
      <Link href="/">
        <a className="text-2xl font-heading font-black tracking-tighter hover:text-gray-200 transition-colors uppercase origin-left z-20 relative">
          Podcast Engine
        </a>
      </Link>

      {/* Desktop Menu - Centered */}
      <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <a
              className={cn(
                "text-sm font-bold uppercase tracking-wide hover:text-gray-300 transition-colors",
                location === link.href && "text-white underline underline-offset-4"
              )}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </div>

      {/* Desktop Buttons - Right Aligned */}
      <div className="hidden md:flex items-center gap-4 z-20 relative">
        <Button variant="ghost" className="text-white hover:text-black hover:bg-white font-bold uppercase text-xs tracking-wider">
          Login
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase text-xs tracking-wider rounded-sm px-6">
          Start A Trial
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-gray-800 w-[300px]">
            <SheetHeader className="text-left mb-8">
              <SheetTitle className="text-white font-heading font-black uppercase text-xl">Podcast Engine</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-bold uppercase tracking-wide hover:text-gray-300 transition-colors",
                        location === link.href && "text-white underline underline-offset-4"
                      )}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-gray-800 my-2" />
              
              <div className="flex flex-col gap-4">
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider rounded-sm">
                  Start A Trial
                </Button>
                <Button variant="ghost" className="w-full text-white hover:bg-gray-800 font-bold uppercase tracking-wider justify-start px-0">
                  Login
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

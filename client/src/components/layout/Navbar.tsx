import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth();

  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  const handleFreeTrial = () => {
    if (!isAuthenticated) {
      window.location.href = "/api/login";
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <nav className="bg-black text-white py-6 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md relative">
      <Link href="/" className="text-2xl font-heading font-black tracking-tighter hover:text-gray-200 transition-colors uppercase origin-left z-20 relative">
        Podcast Engine
      </Link>

      <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-sm font-bold uppercase tracking-wide hover:text-gray-300 transition-colors",
              location === link.href && "text-white underline underline-offset-4"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4 z-20 relative">
        {isLoading ? (
          <div className="h-8 w-20 bg-gray-800 animate-pulse rounded" />
        ) : isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-black hover:bg-white font-bold uppercase text-xs tracking-wider gap-2" data-testid="button-user-menu">
                <User size={16} />
                {user?.firstName || user?.email?.split("@")[0] || "Account"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="cursor-pointer" data-testid="link-dashboard">
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer" data-testid="button-logout">
                <LogOut size={16} className="mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button 
              variant="ghost" 
              className="text-white hover:text-black hover:bg-white font-bold uppercase text-xs tracking-wider"
              onClick={handleLogin}
              data-testid="button-login"
            >
              Login
            </Button>
            <Button 
              className="bg-white text-black hover:bg-gray-200 font-bold uppercase text-xs tracking-wider rounded-sm px-6"
              onClick={handleFreeTrial}
              data-testid="button-free-trial"
            >
              Free Trial
            </Button>
          </>
        )}
      </div>

      <div className="lg:hidden flex items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" data-testid="button-mobile-menu">
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
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-bold uppercase tracking-wide hover:text-gray-300 transition-colors",
                      location === link.href && "text-white underline underline-offset-4"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-gray-800 my-2" />
              
              <div className="flex flex-col gap-4">
                {isAuthenticated ? (
                  <>
                    <Link 
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider rounded-sm text-center py-2"
                    >
                      Dashboard
                    </Link>
                    <Button 
                      variant="ghost" 
                      className="w-full text-white hover:bg-gray-800 font-bold uppercase tracking-wider justify-start px-0"
                      onClick={() => { setIsOpen(false); handleLogout(); }}
                      data-testid="button-mobile-logout"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider rounded-sm"
                      onClick={() => { setIsOpen(false); handleFreeTrial(); }}
                      data-testid="button-mobile-free-trial"
                    >
                      Free Trial
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full text-white hover:bg-gray-800 font-bold uppercase tracking-wider justify-start px-0"
                      onClick={() => { setIsOpen(false); handleLogin(); }}
                      data-testid="button-mobile-login"
                    >
                      Login
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

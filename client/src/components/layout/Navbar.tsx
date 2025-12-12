import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();

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
    <nav className="bg-black text-white py-6 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-12">
        <Link href="/">
          <a className="text-2xl font-heading font-black tracking-tighter hover:text-gray-200 transition-colors uppercase">
            Podcast Engine
          </a>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
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
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:text-black hover:bg-white font-bold uppercase text-xs tracking-wider">
          Login
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase text-xs tracking-wider rounded-sm px-6">
          Start A Trial
        </Button>
      </div>

      {/* Mobile Menu Toggle would go here - simplified for this iteration */}
    </nav>
  );
}

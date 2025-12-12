import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

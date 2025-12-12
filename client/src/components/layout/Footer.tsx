import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link href="/">
            <a className="text-4xl font-heading font-black tracking-tighter mb-8 md:mb-0 block">WEP</a>
          </Link>

          <div className="flex gap-8">
            <ButtonLink href="#">Start A Trial</ButtonLink>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Affiliates</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono pt-8 border-t border-gray-900">
          <p>
            Copyright © 2015 - {new Date().getFullYear()} We Edit Podcasts Ltd. All Rights Reserved. - <span className="text-white cursor-pointer">Cookie Policy</span> | <span className="text-white cursor-pointer">Privacy Policy</span> | <span className="text-white cursor-pointer">Terms and Conditions</span>
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Linkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">
        {children}
      </a>
    </Link>
  );
}

function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm">
        {children}
      </a>
    </Link>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="text-white hover:text-gray-400 transition-colors">
      <Icon size={18} />
    </a>
  );
}

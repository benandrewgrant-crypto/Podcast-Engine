import Layout from "@/components/layout/Layout";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const id = params?.id;

  return (
    <Layout>
      <article className="bg-white">
        {/* Header */}
        <div className="bg-gray-900 text-white py-20 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/blog">
              <a className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={14} className="mr-2" /> Back to Blog
              </a>
            </Link>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              How to Launch a Podcast in 2025: The Ultimate Guide
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm font-mono text-gray-400">
              <span className="flex items-center gap-2"><Calendar size={14} /> Dec 10, 2025</span>
              <span className="flex items-center gap-2"><User size={14} /> Tony Walsh</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto py-16 px-8">
          <div className="prose prose-lg prose-gray mx-auto">
            <p className="lead text-xl text-gray-600 font-medium mb-8">
              Starting a podcast is easier than ever, but standing out is harder. Here is everything you need to know to launch successfully this year.
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2>1. Choose Your Niche</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <blockquote>
              "The medium of podcasting is the most intimate way to connect with an audience."
            </blockquote>

            <h2>2. Get the Right Equipment</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <ul className="list-disc pl-6 space-y-2 my-6 font-medium text-gray-800">
              <li>High quality microphone (USB or XLR)</li>
              <li>Audio interface (if using XLR)</li>
              <li>Pop filter and boom arm</li>
              <li>Closed-back headphones</li>
            </ul>

            <h2>3. Recording and Editing</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          {/* Share */}
          <div className="border-t border-b border-gray-100 py-8 my-12 flex justify-between items-center">
            <span className="font-bold font-heading text-sm uppercase tracking-wide">Share this article</span>
            <div className="flex gap-4">
               <Button size="icon" variant="ghost" className="rounded-full hover:bg-blue-50 hover:text-blue-600"><Facebook size={18} /></Button>
               <Button size="icon" variant="ghost" className="rounded-full hover:bg-sky-50 hover:text-sky-500"><Twitter size={18} /></Button>
               <Button size="icon" variant="ghost" className="rounded-full hover:bg-blue-50 hover:text-blue-700"><Linkedin size={18} /></Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

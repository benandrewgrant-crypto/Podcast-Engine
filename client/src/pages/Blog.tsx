import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Launch a Podcast in 2025: The Ultimate Guide",
    excerpt: "Everything you need to know about equipment, hosting, and promoting your new show.",
    date: "Dec 10, 2025",
    author: "Sarah Jenkins",
    category: "Guides"
  },
  {
    id: 2,
    title: "5 Audio Editing Tips for Crisp Vocals",
    excerpt: "Learn the secrets of compression and EQ to make your voice sound professional.",
    date: "Dec 05, 2025",
    author: "Mike Ross",
    category: "Production"
  },
  {
    id: 3,
    title: "Why Video Podcasts are Taking Over YouTube",
    excerpt: "The data behind the rise of video podcasting and why you should switch today.",
    date: "Nov 28, 2025",
    author: "Sarah Jenkins",
    category: "Trends"
  },
  {
    id: 4,
    title: "Monetizing Your Podcast: Beyond Sponsorships",
    excerpt: "Creative ways to generate revenue from your audience without annoying ads.",
    date: "Nov 15, 2025",
    author: "James Wilson",
    category: "Business"
  }
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Podcast Insights</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">Tips, tricks, and industry news to help you grow your show.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <a className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-600 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-purple-600 mt-auto">
                      Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

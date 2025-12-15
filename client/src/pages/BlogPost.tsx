import Layout from "@/components/layout/Layout";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/data/blog-posts";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const id = params?.id ? parseInt(params.id) : 1;
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

  return (
    <Layout>
      <article className="bg-white">
        {/* Header */}
        <div className="relative bg-gray-900 text-white py-20 px-8 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
             <img 
               src={post.image} 
               alt={post.title} 
               className="w-full h-full object-cover opacity-20 blur-sm scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Link 
              href="/blog"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white mb-8 transition-colors"
              data-testid="link-back-blog"
            >
              <ArrowLeft size={14} className="mr-2" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm font-mono text-gray-400">
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto py-16 px-8">
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>
          
          <div className="prose prose-lg prose-gray mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />

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

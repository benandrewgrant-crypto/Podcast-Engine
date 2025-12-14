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
        <div className="bg-gray-900 text-white py-20 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/blog">
              <a className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={14} className="mr-2" /> Back to Blog
              </a>
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

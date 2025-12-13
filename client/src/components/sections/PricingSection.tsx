import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mic, Video, PenTool, Volume2, CloudUpload, Clock, User, Mail, Plus, DollarSign, Briefcase, Calendar, TrendingDown, ClipboardList, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bgImage from "@assets/generated_images/subtle_white_paper_texture_background.png";

export default function PricingSection() {
  const [isEightEpisodes, setIsEightEpisodes] = useState(false);

  return (
    <section 
      className="py-20 px-4 md:px-8 bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Bundled Monthly Plans</h1>
          <p className="text-gray-500 font-medium">We tailored packages to suit your needs.</p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn("text-xs font-bold uppercase tracking-wider", !isEightEpisodes ? "text-black" : "text-gray-400")}>
              4 Episodes
            </span>
            <div 
              className="w-16 h-8 bg-green-400 rounded-full p-1 cursor-pointer flex items-center shadow-inner transition-colors duration-300"
              onClick={() => setIsEightEpisodes(!isEightEpisodes)}
            >
              <motion.div 
                className="w-6 h-6 bg-white rounded-full shadow-md"
                layout
                initial={false}
                animate={{ x: isEightEpisodes ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={cn("text-xs font-bold uppercase tracking-wider", isEightEpisodes ? "text-black" : "text-gray-400")}>
              8 Episodes
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Plan 1 - Audio + 2 Reels */}
          <PricingCard 
            title={isEightEpisodes ? "8 EPISODES/MONTH" : "4 EPISODES/MONTH"}
            subtitle="(AUDIO + 2 REELS)"
            price={isEightEpisodes ? "1080" : "540"}
            period="/mo"
            description={isEightEpisodes ? "For High-Volume Audio Creators" : "Ideal for Audio-First Creators"}
            theme="dark"
            features={isEightEpisodes ? [
              "8 Episodes Per Month",
              "Audio Editing Only",
              "2 Reels Per Episode",
              "Show Notes & Thumbnail",
              "Publishing & Distribution",
              "Dedicated Editor",
              "72-Hour Turnaround"
            ] : [
              "Audio-only edit: ~3.5 hours",
              "2 reels (1.25 hrs each): ~2.5 hours",
              "Show notes, thumbnail, publishing: ~1.5 hours",
              "Total per episode: ~7.5 hours",
              "Monthly total (4 episodes): ~30 hours",
              "At $25/hr: 30 hours × $25 = $750",
              "$540 → That’s $210 underpaid per month, or $18/hour, which is 28% off."
            ]}
          />

          {/* Plan 2 - Video + 2 Reels */}
          <PricingCard 
            title={isEightEpisodes ? "8 EPISODES/MONTH" : "4 EPISODES/MONTH"}
            subtitle="(VIDEO + 2 REELS)"
            price={isEightEpisodes ? "1360" : "799"}
            period="/mo"
            description={isEightEpisodes ? "For High-Volume Creators" : "Best Value for Growing Shows"}
            theme="light"
            buttonColor="bg-wep-purple"
            features={isEightEpisodes ? [
              "8 Episodes Per Month",
              "Video & Audio Editing",
              "2 Reels Per Episode",
              "Show Notes & Thumbnail",
              "Publishing & Distribution",
              "Dedicated Editor",
              "72-Hour Turnaround"
            ] : [
              "Video & Audio-only edit: ~6.5 hours",
              "2 reels (1.25 hrs each): ~2.5 hours",
              "Show notes, thumbnail, publishing: ~1.5 hours",
              "Total per episode: ~10.5 hours",
              "Monthly total (4 episodes): ~42 hours",
              "At $25/hr: 42 hours × $25 = $1050",
              "$799 → That’s $252 underpaid per month, or $19/hour, which is 24% off."
            ]}
          />

          {/* Plan 3 - Video + 2 Reels (Premium/High Vol) -> Reusing logic or creating a new tier */}
          {/* Since the user asked for 4 vs 8 episodes toggle, and we have 3 slots, 
              we can show the "Writing" plan or "Custom" plan here, 
              OR we can stick to the previous Writing plan but adapted.
              
              However, the bundle sheet only had 3 specific plans. 
              Let's make the 3rd card "Writing" again as per original design, 
              but scale it based on episodes.
              
              Original Writing: $1640 for 4 episodes.
              8 episodes: $3280 (simple scaling)
           */}
          <PricingCard 
            title={isEightEpisodes ? "8 EPISODES/MONTH" : "4 EPISODES/MONTH"}
            subtitle="(WRITING BUNDLE)"
            price={isEightEpisodes ? "3280" : "1640"}
            period="/mo"
            description="Full Production + Writing"
            theme="yellow"
            features={[
              `${isEightEpisodes ? '8' : '4'} Episodes Per Month`,
              "Audio Editing + Transcription",
              "Professional Show Notes",
              "Blog Post Creation",
              "Publishing & Distribution",
              "Dedicated Editor",
              "72-Hour Turnaround"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  subtitle?: string;
  price: string;
  period: string;
  description: string;
  theme: "dark" | "light" | "yellow";
  features: string[];
  buttonColor?: string;
}

function PricingCard({ title, subtitle, price, period, description, theme, features, buttonColor }: PricingCardProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case "dark": return "bg-[#404040] text-white";
      case "light": return "bg-white text-gray-900 border border-gray-100 shadow-xl";
      case "yellow": return "bg-[#F4D03F] text-white"; // Using exact yellow from image approx
      default: return "bg-white text-gray-900";
    }
  };

  const getButtonClasses = () => {
    if (buttonColor) return `${buttonColor} text-white hover:opacity-90`;
    return "bg-white text-gray-900 hover:bg-gray-100";
  };

  const getIconColor = () => {
    if (theme === "light") return "text-gray-900";
    return "text-white";
  };

  return (
    <motion.div 
      className={cn("rounded-lg p-8 h-full flex flex-col relative overflow-hidden", getThemeClasses())}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-xl font-black font-heading uppercase mb-1 leading-tight">{title}</h3>
        {subtitle && <p className="text-xs font-bold uppercase opacity-80 mb-6">{subtitle}</p>}
        
        <div className="flex justify-center items-baseline mb-6">
          <span className="text-4xl font-black">$</span>
          <span className="text-5xl font-black tracking-tighter">{price}</span>
          <span className="text-sm font-medium opacity-80 ml-1">{period}</span>
        </div>
        
        <div className="flex justify-center gap-2 mb-8">
           <Button variant="secondary" className="text-[10px] h-8 px-4 rounded-full font-bold uppercase tracking-tight bg-white/20 text-inherit hover:bg-white/30 border-none shadow-none">
            {description}
          </Button>
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-10">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-xs font-bold tracking-wide">
            <div className={cn("mt-0.5", getIconColor())}>
              {getIconForText(feature)}
            </div>
            <span className="opacity-90 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto text-center">
        <Button className={cn("w-40 font-bold uppercase tracking-widest text-xs py-6 rounded-md shadow-lg", getButtonClasses())}>
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}

function getIconForText(text: string) {
  const t = text.toLowerCase();
  
  if (t.includes("typical workload")) return <ClipboardList size={14} />;
  if (t.includes("audio-only edit") || t.includes("audio editing")) return <Mic size={14} />;
  if (t.includes("video & audio") || t.includes("video editing")) return <Video size={14} />;
  if (t.includes("reels")) return <Video size={14} />;
  if (t.includes("show notes")) return <PenTool size={14} />;
  if (t.includes("total per episode")) return <Clock size={14} />;
  if (t.includes("turnaround")) return <Clock size={14} />;
  if (t.includes("monthly total")) return <Calendar size={14} />;
  if (t.includes("at $25/hr")) return <DollarSign size={14} />;
  if (t.includes("underpaid")) return <Percent size={14} />;
  if (t.includes("episodes per month")) return <Clock size={14} />;
  if (t.includes("publishing")) return <CloudUpload size={14} />;
  if (t.includes("dedicated editor")) return <User size={14} />;
  
  return <Check size={14} />;
}

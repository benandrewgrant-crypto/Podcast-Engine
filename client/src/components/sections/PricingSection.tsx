import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mic, Video, PenTool, Volume2, CloudUpload, Clock, User, Mail, Plus, DollarSign, Briefcase, Calendar, TrendingDown, ClipboardList, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bgImage from "@assets/generated_images/subtle_white_paper_texture_background.png";

export default function PricingSection() {
  const [isFourEpisodes, setIsFourEpisodes] = useState(true);

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
            <span className={cn("text-xs font-bold uppercase tracking-wider", !isFourEpisodes ? "text-black" : "text-gray-400")}>
              2 Episodes
            </span>
            <div 
              className="w-16 h-8 bg-green-400 rounded-full p-1 cursor-pointer flex items-center shadow-inner transition-colors duration-300"
              onClick={() => setIsFourEpisodes(!isFourEpisodes)}
            >
              <motion.div 
                className="w-6 h-6 bg-white rounded-full shadow-md"
                layout
                initial={false}
                animate={{ x: isFourEpisodes ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={cn("text-xs font-bold uppercase tracking-wider", isFourEpisodes ? "text-black" : "text-gray-400")}>
              4 Episodes
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Plan 1 - Audio */}
          <PricingCard 
            title={isFourEpisodes ? "4 EPISODES/MONTH" : "2 EPISODES/MONTH"}
            subtitle="(AUDIO EDITING)"
            price={isFourEpisodes ? "800" : "440"}
            period="/mo"
            description="Professional Audio Production"
            theme="dark"
            features={[
              `${isFourEpisodes ? '4' : '2'} Episodes Per Month`,
              "Audio Editing (Basic) Only",
              "Episodes Up to 60min",
              "Sync Multi-Track Channels",
              "Noise Reduction & Cleaning",
              "Volume Matching",
              "Adding Intro/Outro/Ads",
              "Episode Uploading",
              "72-Hour Turnaround"
            ]}
          />

          {/* Plan 2 - Video */}
          <PricingCard 
            title={isFourEpisodes ? "4 EPISODES/MONTH" : "2 EPISODES/MONTH"}
            subtitle="(VIDEO EDITING)"
            price={isFourEpisodes ? "1800" : "980"}
            period="/mo"
            description="Audio + Video Production"
            theme="light"
            buttonColor="bg-wep-purple"
            features={[
              `${isFourEpisodes ? '4' : '2'} Episodes Per Month`,
              "Audio + Video Editing (Basic)",
              "Episodes Up to 60min",
              "Sync Multi-Track Channels",
              "Noise Reduction & Cleaning",
              "Volume Matching",
              "Adding Intro/Outro/Ads",
              "Episode Uploading",
              "72-Hour Turnaround"
            ]}
          />

          {/* Plan 3 - Writing */}
          <PricingCard 
            title={isFourEpisodes ? "4 EPISODES/MONTH" : "2 EPISODES/MONTH"}
            subtitle="(WRITING BUNDLE)"
            price={isFourEpisodes ? "1640" : "900"}
            period="/mo"
            description="Full Production + Writing"
            theme="yellow"
            features={[
              `${isFourEpisodes ? '4' : '2'} Episodes Per Month`,
              "Audio Editing + Transcription",
              "Professional Show Notes",
              "Episodes Up to 60min",
              "Sync Multi-Track Channels",
              "Adding Intro/Outro/Ads",
              "Episode Uploading",
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
          <span className="text-4xl font-black">€</span>
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
  if (t.includes("noise reduction") || t.includes("volume matching")) return <Volume2 size={14} />;
  if (t.includes("uploading")) return <CloudUpload size={14} />;
  
  return <Check size={14} />;
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mic, Video, PenTool, Volume2, CloudUpload, Clock, User, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bgImage from "@assets/generated_images/subtle_white_paper_texture_background.png";

export default function PricingSection() {
  const [isFourEpisodes, setIsFourEpisodes] = useState(false);

  return (
    <section 
      className="py-20 px-4 md:px-8 bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Pricing Packages</h1>
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
          {/* Audio Editing - Dark Card */}
          <PricingCard 
            title="Audio Editing"
            price={isFourEpisodes ? "800" : "400"}
            period="/mo"
            description="Learn More About Audio Production"
            theme="dark"
            features={[
              "Audio Editing (Basic) Only",
              `${isFourEpisodes ? '4' : '2'} Episodes Per Month`,
              "Episodes Up to 60min",
              "Sync Multi-Track Channels",
              "Adding Intro's, Outros, and Ads",
              "Noise Reduction and Cleaning",
              "Volume Matching",
              "Episode Uploading",
              "72-Hour Turnaround",
              "Dedicated Editor Working on your show",
              "Same Day Email Support During Work Hours"
            ]}
          />

          {/* Video Editing - White Card */}
          <PricingCard 
            title="Video Editing"
            price={isFourEpisodes ? "1800" : "900"}
            period="/mo"
            description="Learn More About Video Production"
            theme="light"
            buttonColor="bg-wep-purple"
            features={[
              "Audio Editing (Basic) + Video Editing (Basic)",
              `${isFourEpisodes ? '4' : '2'} Episodes Per Month`,
              "Episodes Up to 60min",
              "Sync Multi-Track Channels",
              "Adding Intro's, Outros, and Ads",
              "Noise Reduction and Cleaning",
              "Volume Matching",
              "Episode Uploading",
              "72-Hour Turnaround",
              "Dedicated Editor Working on your show",
              "Same Day Email Support During Work Hours"
            ]}
          />

          {/* Writing - Yellow Card */}
          <PricingCard 
            title="Writing"
            price={isFourEpisodes ? "1640" : "820"}
            period="/mo"
            description="About Show Notes | About Transcription"
            theme="yellow"
            features={[
              "Audio Editing + Show Notes + Transcription",
              `${isFourEpisodes ? '4' : '2'} Episodes Per Month`,
              "Episodes Up to 60min",
              "Sync Multi-Track Channels",
              "Adding Intro's, Outros, and Ads",
              "Noise Reduction and Cleaning",
              "Volume Matching",
              "Episode Uploading",
              "72-Hour Turnaround",
              "Dedicated Editor Working on your show",
              "Same Day Email Support During Work Hours"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  theme: "dark" | "light" | "yellow";
  features: string[];
  buttonColor?: string;
}

function PricingCard({ title, price, period, description, theme, features, buttonColor }: PricingCardProps) {
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
        <h3 className="text-2xl font-black font-mono mb-6">{title}</h3>
        <div className="flex justify-center items-baseline mb-6">
          <span className="text-4xl font-black">$</span>
          <span className="text-5xl font-black tracking-tighter">{price}</span>
          <span className="text-sm font-medium opacity-80 ml-1">{period}</span>
        </div>
        
        <div className="flex justify-center gap-2 mb-8">
          {description.includes("|") ? (
            description.split("|").map((d, i) => (
              <Button key={i} variant="secondary" className="text-[10px] h-8 px-3 rounded-full font-bold uppercase tracking-tight bg-white/20 text-inherit hover:bg-white/30 border-none shadow-none">
                {d.trim()}
              </Button>
            ))
          ) : (
             <Button variant="secondary" className="text-[10px] h-8 px-4 rounded-full font-bold uppercase tracking-tight bg-white/20 text-inherit hover:bg-white/30 border-none shadow-none">
              {description}
            </Button>
          )}
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-10">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-xs font-bold tracking-wide">
            <div className={cn("mt-0.5", getIconColor())}>
              {getIconForFeature(i)}
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

function getIconForFeature(index: number) {
  const icons = [
    <PenTool size={14} />, // Edit
    <Clock size={14} />, // Quantity
    <Clock size={14} />, // Duration
    <Volume2 size={14} />, // Sync
    <Plus size={14} />, // Intro
    <Mic size={14} />, // Noise
    <Volume2 size={14} />, // Volume
    <CloudUpload size={14} />, // Upload
    <Clock size={14} />, // Turnaround
    <User size={14} />, // Dedicated Editor
    <Mail size={14} />, // Support
  ];
  return icons[index] || <Check size={14} />;
}

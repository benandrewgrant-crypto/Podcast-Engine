import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import lensImage from "@assets/generated_images/close_up_of_a_camera_lens_in_black_and_white_artistic_style.png";

export default function CustomPlanSection() {
  const features = [
    "Need more than 4 episodes per month?",
    "Need once-off credits instead of a subscription?",
    "Need Premium Services instead of Basic?",
    "Need to add Videograms or Artwork Services?",
    "Need Launch Services for your Podcast?",
    "Like building stuff?"
  ];

  return (
    <section className="bg-black text-white py-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image with Vignette */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div className="w-full h-full relative overflow-hidden">
             {/* Circular Mask Effect */}
             <div className="absolute inset-0 flex items-center justify-center z-0">
               <img 
                 src={lensImage} 
                 alt="Podcast Production Lens" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-black/30" />
             </div>
             
             {/* Radial gradient overlay to mimic the lens look in screenshot */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_70%)] pointer-events-none" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-12 md:pl-20 z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black mb-6">Need a Custom Plan?</h2>
            <p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed">
              If the above packages don't suit your needs, use our pricing calculator to build your own custom package.
            </p>

            <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase px-8 py-6 rounded-sm mb-12">
              Schedule a call Today
            </Button>

            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold tracking-wide text-gray-300">
                  <Check size={16} className="text-white mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Layout from "@/components/layout/Layout";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="bg-black text-white py-20 px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Let's Talk</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Schedule a free consultation to discuss your podcast production needs.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto py-12 px-4">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
            <InlineWidget 
                url="https://calendly.com/calendly-advisory-services/30min" 
                styles={{ height: '700px' }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

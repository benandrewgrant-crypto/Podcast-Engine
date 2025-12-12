import Layout from "@/components/layout/Layout";
import PricingSection from "@/components/sections/PricingSection";
import CustomPlanSection from "@/components/sections/CustomPlanSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <Layout>
      <PricingSection />
      <CustomPlanSection />
      
      {/* Short FAQ List from Screenshot Right Side of Custom Plan Section */}
      <section className="bg-white py-16 px-4 md:px-8 border-b">
        <div className="max-w-3xl mx-auto space-y-4">
            <SimpleAccordion question="What is a Subscription Package?" />
            <SimpleAccordion question="What is a Credits Package?" />
            <SimpleAccordion question="I need a service that isn't listed." />
            <SimpleAccordion question="Are all services turned around in 72-hours?" />
            <SimpleAccordion question="Become an Affiliate Partner." />
            <SimpleAccordion question="Have more questions? Schedule a call." />
        </div>
      </section>

      <FAQSection />
    </Layout>
  );
}

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

function SimpleAccordion({ question }: { question: string }) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border rounded-sm px-4">
                <AccordionTrigger className="text-sm font-bold hover:no-underline py-4">
                    {question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                    Detailed answer regarding {question} goes here. We ensure top quality service and support.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

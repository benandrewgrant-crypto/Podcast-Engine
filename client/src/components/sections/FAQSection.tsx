import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQSection() {
  const faqs = [
    { question: "What exactly do you do?", answer: "We take your raw recordings and turn them into polished, professional episodes ready for publishing. This includes editing, mixing, mastering, and adding your intro/outro." },
    { question: "Can you help set up my podcast?", answer: "Yes! We offer launch packages that include everything from equipment recommendations to setting up your hosting and RSS feed." },
    { question: "Can you advise me on the best podcast equipment I need?", answer: "Absolutely. We have a list of recommended gear for every budget and can help you choose the right setup for your recording environment." },
    { question: "What is your turnaround time?", answer: "Our standard turnaround time is 72 business hours from the time we receive your files." },
    { question: "How and where do I send you the files to be worked on?", answer: "We use a secure file transfer system (like Dropbox or Google Drive) or our own client portal where you can upload your raw audio files." },
    { question: "Would I have an assigned member of your team, or just whoever is available?", answer: "You will be assigned a dedicated editor who will get to know your show's style and preferences." },
    { question: "How will I communicate with you?", answer: "We use email for day-to-day communication and have a project management dashboard for tracking your episodes." },
    { question: "I'm ready to get started, but I have a few more questions.", answer: "No problem! You can schedule a free consultation call with us to discuss your specific needs." },
  ];

  const faqsRight = [
    { question: "How do I pay for the services?", answer: "We accept all major credit cards and PayPal. Subscription plans are billed monthly." },
    { question: "Can I cancel my plan anytime?", answer: "Yes, our monthly plans are flexible. You can cancel anytime before your next billing cycle." },
    { question: "What's the process if I would downgrade or upgrade my plan with you?", answer: "You can easily switch plans from your account dashboard. Changes will take effect at the start of your next billing cycle." },
    { question: "Do I need to commit to a contract on the monthly plans?", answer: "No long-term contracts. Our services are month-to-month." },
    { question: "Do you offer a money-back guarantee?", answer: "We offer a satisfaction guarantee. If you're not happy with an episode, we'll revise it until you are." },
    { question: "If I start now, can I have my first episode out in 96 hours?", answer: "Yes! Once we have your files and branding assets, we can turn around your first episode within our standard timeframe." },
    { question: "I'm ready to hire you for my podcast production. What are the next steps?", answer: "Click the 'Get Started' button on your chosen plan, fill out the onboarding form, and we'll set up your project immediately!" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16 bg-black text-white p-8 rounded-sm">
          <h2 className="text-2xl md:text-3xl font-bold">Have questions? Let's Talk.</h2>
          <Link href="/contact">
            <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase px-6">
              Schedule a Call
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion type="single" collapsible key={`left-${i}`}>
                <AccordionItem value={`item-${i}`} className="border-b border-gray-100">
                  <AccordionTrigger className="text-left font-bold text-sm hover:text-gray-600 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          
          <div className="space-y-4">
            {faqsRight.map((faq, i) => (
              <Accordion type="single" collapsible key={`right-${i}`}>
                <AccordionItem value={`item-${i}`} className="border-b border-gray-100">
                  <AccordionTrigger className="text-left font-bold text-sm hover:text-gray-600 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

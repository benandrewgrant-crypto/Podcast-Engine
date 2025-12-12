import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="bg-white min-h-screen py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-center uppercase">Terms and Conditions</h1>
          
          <div className="prose prose-lg mx-auto text-gray-700 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide border-b pb-2">Scope of Work</h2>
              <p className="font-medium mb-4">
                All services provided by <span className="font-bold">Podcast Engine</span> (hereinafter "The Contractor") are governed by the selected pricing tier or custom scope agreed upon with the client.
              </p>
              <p className="mb-4">Services may include, but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 font-medium">
                <li>Audio and Video Editing</li>
                <li>Short-Form Content Creation (Reels / Audiograms)</li>
                <li>Podcast Strategy and Coaching</li>
                <li>Publishing and Distribution</li>
                <li>Marketing Assets (Thumbnails, Intros, Ad Reads, etc.)</li>
              </ul>
              <p className="mt-6 italic text-gray-500">
                Any services not explicitly outlined in the agreed scope may be considered add-ons and billed separately upon approval.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide border-b pb-2">Final Notes</h2>
              <p className="mb-6">
                By engaging Podcast Engine, the client agrees to the terms outlined above. These guidelines are intended to protect the working relationship, promote clarity, and ensure quality service delivery.
              </p>
              <p className="text-xl font-bold text-center text-black py-8">
                Let's create great content — with clarity, fairness, and mutual respect.
              </p>
              <div className="text-center text-sm font-mono text-gray-400 mt-8">
                WWW.PODCAST-ENGINE.COM
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
}

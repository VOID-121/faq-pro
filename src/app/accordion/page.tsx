import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function SupportPage() {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Header shifted left */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-neutral-900">SUPPORT</h1>
          <p className="text-base text-gray-500 mt-2">
            Frequently asked questions about our stickers and process.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-neutral-800">Shipping and Delivery</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                "Where's my order?",
                "Can I track my order?",
                "How fast can I have my stickers?",
                "Order status",
                "What was my order shipped in?",
                "What happens if I provided an incorrect address?",
                "Where are you located?",
                "Are there any countries you don't ship to?",
              ].map((q, i) => (
                <AccordionItem value={`item-1-${i}`} key={i}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>Answer for: {q}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
  
          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-neutral-800">Printed Custom Stickers</h2>
            <Accordion type="single" collapsible className="space-y-2 mb-6">
              {[
                "What file formats do you accept?",
                "Why was I unable to upload my artwork?",
                "When will I receive my proof?",
                "Are your stickers weatherproof?",
                "What's the difference between die cut stickers and transfer stickers?",
              ].map((q, i) => (
                <AccordionItem value={`item-2-${i}`} key={i}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>Answer for: {q}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
  
            <h2 className="text-lg font-semibold mb-4 text-neutral-800">Transfer Stickers</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                "Are your transfer stickers weatherproof?",
                "How many colors do you offer for transfer stickers?",
                "How do I apply my transfer or social media stickers?",
              ].map((q, i) => (
                <AccordionItem value={`item-2b-${i}`} key={i}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>Answer for: {q}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
  
          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-neutral-800">Payment</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                "My card keeps getting declined",
                "What currency are your prices in?",
                "Refunds",
                "Affirm / Financing",
              ].map((q, i) => (
                <AccordionItem value={`item-3-${i}`} key={i}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>Answer for: {q}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
  
        {/* Contact Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">
            CONTACT US
          </button>
        </div>
      </section>
    )
  }
  
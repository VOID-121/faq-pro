import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const unsupportedCountries = [
    "South Sudan",
    "Sudan",
    "South Georgia and the South Sandwich Islands",
    "Antarctica",
    "Bouvet Island",
    "British Indian Ocean Territory",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Cuba",
    "Equatorial Guinea",
    "Falkland Islands (Malvinas)",
    "French Southern Territories",
    "Heard Island and McDonald Islands",
    "Iran, Islamic Republic of",
    "Kosovo",
    "Nauru",
    "Niue",
    "North Korea",
    "Pitcairn",
    "Saint Helena",
    "Saint Pierre and Miquelon",
    "Sao Tome and Principe",
    "Somalia",
    "Syrian Arab Republic",
    "Tokelau",
    "Turkmenistan",
    "Western Sahara",
    "United States Minor Outlying Islands",
  ]
  
  const supportSections = [
    {
      title: "Shipping and Delivery",
      items: [
        {
          q: "Where's my order?",
          a: (
            <>
            <p className="italic font-bold  text-gray-500 mb-4">
                 Due to the current state of the USPS, some packages are experiencing delivery delays by up to 4 days. We appreciate your patience during this time. Please check your mailbox for ensure your package has not already been delivered. USPS delivery scans tend to be delayed.
            </p>
            <p className="mb-2 font-medium text-gray-500 ">
                  Your order will be shipped and delivered according to the shipping method you selected during checkout.
            </p>
                                    <ul className="list-disc list-inside space-y-1 font-medium text-gray-500 ">
                                        <li>Free Shipping (12 Days)</li>
                                        <li>Standard (10-12 Days)</li>
                                        <li>UPS Express (5-6 Days)</li>
                                        <li>Rush Production & UPS Express Shipping (4 Days)</li>
                                    </ul>
            </>
          ),
        },
        {
          q: "Can I track my order?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
                Yes, we send you a tracking number upon shipment. Please check your mailbox for ensure your package has not already been delivered. USPS delivery scans tend to be delayed.
            </p>
          ),
        },
        {
          q: "How fast can I have my stickers?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
               If you need your stickers as soon as possible, select either or UPS Express (5-6 day shipping) or Rush Production and UPS Express Shipping (4 day) option upon checkout. This will ensure you receive your stickers in a timely manner. Free and standard USPS shipping typically takes around 10-12 days. 
              </p>

          ),
        },
        {
          q: "Order status",
          a: (
            <p className="italic font-medium text-gray-500 mb-4">
              Check your order status here:{" "}
              <a
                href="https://vinylstatus.com/track-order/"
                className="text-black font-medium hover:text-blue-600 no-underline"
              >
                https://vinylstatus.com/track-order/
              </a>
            </p>
          ),
        },
        {
          q: "What was my order shipped in?",
          a: (
            <p className="italic font-medium text-gray-500 mb-4">
              Our orders are usually shipped in a large envelope via USPS.
            </p>
          ),
        },
        {
          q: "What happens if I provided an incorrect address?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
             If you provided us with an incorrect address upon checkout, please contact us immediately. Addresses cannot be modified on orders that have already been shipped.  
             </p>

          ),
        },
        {
          q: "Where are you located?",
          a: (
            <p className="italic font-medium text-gray-500 mb-4">
              Vinyl Status is located in Redmond, WA and ships worldwide.
            </p>
          ),
        },
        {
          q: "Are there any countries you don't ship to?",
          a: (
            <>
                     <p className="italic font-medium text-gray-500 mb-4">
                    Our shipping provider (UPS) does not ship to some countries. You can still order using these steps:
                    </p>
                    <ol className="list-decimal list-inside font-medium text-gray-500 mb-4">
                    <li>
                        Create an account at{" "}
                        <a href="https://www.myus.com/" className="text-black font-medium hover:text-blue-600 no-underline">
                        MyUS
                        </a>{" "}
                        (or a similar forwarding service)
                    </li>
                    <li>Use your U.S. address at checkout</li>
                    <li>MyUS will forward your package internationally</li>
                    </ol>
                    <p className="mb-2 font-medium text-gray-500">We do not ship directly to these countries:</p>
                    <ol className="list-decimal list-inside font-medium text-gray-500 mb-4 space-y-1">
                    {unsupportedCountries.map((country, idx) => (
                        <li key={idx}>{country}</li>
                    ))}
                    </ol>
                    <p className="italic font-medium text-gray-500 mb-4">
                    If you're in any of these countries, you can use{" "}
                    <a href="https://www.myus.com/" className="text-black font-medium hover:text-blue-600 no-underline">
                        MyUS
                    </a>{" "}
                    to receive and forward your packages.
                    </p>


            </>
          ),
        },
      ],
    },
    {
      title: "Printed Custom Stickers",
      items: [
        {
          q: "What file formats do you accept?",
          a: (
            <>
              <p className="italic font-medium  text-gray-500 mb-4">
                We accept all artwork formats. Simply send us your artwork and our designers will provide you with a proof within hours. You can request changes to the proof until you’re happy. 
                 </p>
                <p className="mb-2 font-medium ">
               We recommend uploading vector artwork when possible. Otherwise we recommend that your artwork be at least 300 pixels per inch (PPI). 
             </p>
            </>
          ),
        },
        {
          q: "Why was I unable to upload my artwork?",
          a: (
            <>
               <p className="italic font-medium  text-gray-500 mb-4">
                   If you are unable to upload your artwork, select “Skip this step and email artwork later” below the artwork upload form. You may then proceed through checkout and email us your artwork after ordering.

                </p>
                  <p className="mb-2 font-medium ">
                  Please send your artwork with your order number to:<br></br> info@vinylstatus.com
                </p>
            </>
          ),
        },
        {
          q: "When will I receive my proof?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
             If you ordered printed stickers or transfer stickers, we’ll send you a proof within 24 hours. Please keep an eye out for an email with a link to your proof.   
            </p>
          ),
        },
        {
          q: "Are your stickers weatherproof?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
            If you ordered printed stickers or transfer stickers, we’ll send you a proof within 24 hours. Please keep an eye out for an email with a link to your proof.   
            </p>
          ),
        },
        {
          q: "What's the difference between die cut stickers and transfer stickers?",
          a: (
            <>
              <>
                    <p className="text-gray-500 mb-2 font-medium">
                        <a
                        href="https://vinylstatus.com/product/die-cut-stickers/"
                        className="text-black font-medium hover:text-blue-600 no-underline"
                        >
                        Die cut stickers
                        </a>{" "}
                        are printed and cut to the exact shape of the design.
                    </p>
                    <p className="text-gray-500 font-semibold mb-2">Example of Die Cut Stickers:</p>
                    <img src="/images/car.jpg" alt="Die Cut Sticker" className="w-full mb-6 rounded" />
                    <p className="text-gray-500 mb-2 font-medium">
                        <a
                        href="https://vinylstatus.com/product/transfer-stickers/"
                        className="text-black font-medium hover:text-blue-600 no-underline"
                        >
                        Transfer stickers
                        </a>{" "}
                        and{" "}
                        <a
                        href="https://vinylstatus.com/product/customstickers/"
                        className="text-black font-medium hover:text-blue-600 no-underline"
                        >
                        vinyl lettering
                        </a>{" "}
                        are made out of a <span className="font-bold">1 color</span>, 3.4mil thick durable vinyl. They are cut with precision and hand weeded. Since the material is dyed, it will never fade. Transfer stickers and vinyl lettering have no background and are fully weatherproof.
                    </p>
                    <p className="text-gray-500 font-semibold mb-2">Example of Transfer Stickers:</p>
                    <img
                        src="/images/VinylStatus_17859554–01ALT.jpg"
                        alt="Transfer Sticker"
                        className="w-full mb-6 rounded"
                    />
</>

            </>
          ),
        },
      ],
    },
    {
      title: "Transfer Stickers",
      items: [
        {
          q: "Are your transfer stickers weatherproof?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
            Our transfer and social media stickers are made to last 6+ years outdoors.  
            </p>

          ),
        },
        {
          q: "How many colors do you offer for transfer stickers?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
               We offer our transfer stickers in 13 different colors, including multiple reflective colors. If you need a color that isn’t included in our color offerings, feel free to contact us for a special order.  

              </p>

          ),
        },
        {
          q: "How do I apply my transfer or social media stickers?",
          a: (
            <p className="italic font-medium text-gray-500 mb-4">
              Visit{" "}
              <a
                href="https://www.VinylStatus.com/Apply"
                className="text-black text-l font-medium hover:text-blue-600 no-underline"
              >
                www.VinylStatus.com/Apply
              </a>{" "}
              for instructions.
            </p>
          ),
        },
      ],
    },
    {
      title: "Payment",
      items: [
        {
          q: "My card keeps getting declined",
          a: (
            <>
     <p className="italic font-medium  text-gray-500 mb-4">
      Your payment may be getting declined for multiple reasons.
    </p>
            <ol className="list-decimal list-inside font-medium text-gray-500 mb-4">
            <li>Ensure you are entering your correct billing address and info during checkout.</li><br></br>
            <li>Ensure your card is not expired.</li><br></br>
            <li>Ensure your card is properly funded.</li>
            </ol>
                                
        <p className="mb-2 font-medium ">
        In the event your card keeps getting declined, we offer PayPal as a secondary payment method. 
         </p>
            </>
          ),
        },
        {
          q: "What currency are your prices in?",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">
               All prices on our website are listed in USD. 
            </p>
          ),
        },
        {
          q: "Refunds",
          a: (
            <>
              <p className="italic font-medium  text-gray-500 mb-4">
                    Vinyl Status will replace stickers in the event of a quality control issue or if your order is damaged during transit. It is the purchasers responsibility to ensure that the item corresponds to their need. Since your order is sent directly into production after it is placed, we are unable to cancel nor refund your order after it is placed. Returns for any other reason will not be accepted. 
               </p>
             <p className="mb-2 font-medium ">
                If you are not absolutely certain about your order, please do not hesitate to contact us.
            </p>

            </>
          ),
        },
        {
          q: "Affirm / Financing",
          a: (
            <p className="italic font-medium  text-gray-500 mb-4">  Your rate will be 0-36% APR based on credit, and is
                        subject to an eligibility check. For example, a $700 purchase might
                        cost $63.25/mo over 12 months at 15% APR. Payment options through
                        Affirm are provided by these lending partners: affirm.com/lenders.
                        Options depend on your purchase amount, and a down payment may be required. </p>
          ),
        },
      ],
    },
  ]
  
  export default function SupportPage() {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-600">SUPPORT</h1>
          <p className="text-xl font-medium text-gray-500 mt-3">
            Frequently asked questions about our stickers and process.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left column: Shipping and Delivery */}
          <div>
            <h2 className="text-2xl font-semibold mb-1 text-neutral-600">Shipping and Delivery</h2>
            <hr className="mb-4 border-t border-gray-300" />
            <Accordion type="single" collapsible className="space-y-4">
              {supportSections[0].items.map((item, i) => (
                <AccordionItem value={`item-0-${i}`} key={i}>
                  <AccordionTrigger className="text-gray-500 text-xl font-medium transition-colors px-4 py-3 rounded-md group data-[state=open]:shadow-[0_2px_10px_rgba(0,0,0,0.1)] data-[state=open]:bg-gray-100 data-[state=open]:text-orange-500 hover:text-blue-500">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-500 px-4 py-2">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
  
          {/* Middle column: Printed Custom Stickers and Transfer Stickers */}
          <div>
            <h2 className="text-2xl font-semibold mb-1 text-neutral-600">Printed Custom Stickers</h2>
            <hr className="mb-4 border-t border-gray-300" />
            <Accordion type="single" collapsible className="space-y-4">
              {supportSections[1].items.map((item, i) => (
                <AccordionItem value={`item-1-${i}`} key={i}>
                  <AccordionTrigger className="text-gray-500 text-xl font-medium transition-colors px-4 py-3 rounded-md group data-[state=open]:shadow-[0_2px_10px_rgba(0,0,0,0.1)] data-[state=open]:bg-gray-100 data-[state=open]:text-orange-500 hover:text-blue-500">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-500 px-4 py-2">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
  
            <h2 className="text-2xl font-semibold mb-1 text-neutral-600 mt-12">Transfer Stickers</h2>
            <hr className="mb-4 border-t border-gray-300" />
            <Accordion type="single" collapsible className="space-y-4">
              {/* Here we swapped content of Transfer Stickers with Payment */}
              {supportSections[2].items.map((item, i) => (
                <AccordionItem value={`item-2-${i}`} key={i}>
                  <AccordionTrigger className="text-gray-500 text-xl font-medium transition-colors px-4 py-3 rounded-md group data-[state=open]:shadow-[0_2px_10px_rgba(0,0,0,0.1)] data-[state=open]:bg-gray-100 data-[state=open]:text-orange-500 hover:text-blue-500">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-500 px-4 py-2">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
  
          {/* Right column: Payment (now containing Transfer Stickers' content) */}
          <div>
            <h2 className="text-2xl font-semibold mb-1 text-neutral-600">Payment</h2>
            <hr className="mb-4 border-t border-gray-300" />
            <Accordion type="single" collapsible className="space-y-4">
              {/* Here we swapped content of Payment with Transfer Stickers */}
              {supportSections[3].items.map((item, i) => (
                <AccordionItem value={`item-3-${i}`} key={i}>
                  <AccordionTrigger className="text-gray-500 text-xl font-medium transition-colors px-4 py-3 rounded-md group data-[state=open]:shadow-[0_2px_10px_rgba(0,0,0,0.1)] data-[state=open]:bg-gray-100 data-[state=open]:text-orange-500 hover:text-blue-500">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-500 px-4 py-2">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
  
        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-8 py-4 rounded-full font-semibold">
            CONTACT US
          </button>
        </div>
      </section>
    );
  }
  
  
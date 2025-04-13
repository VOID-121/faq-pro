import { Separator } from "@/components/ui/separator";

const steps = [
  {
    number: "1.",
    text: (
      <>
        Make sure surface is at least <strong>50° Fahrenheit</strong>.
        <br />
        <br />
        Clean Surface with Glass Cleaner and Lint Free Microfiber or Cloth
      </>
    ),
  },
  {
    number: "2.",
    text: (
      <>
        Peel transfer paper from backing paper. If necessary, use a credit/ID <br />
        card to press down and better attach the transfer paper to the backing paper.
      </>
    ),
  },
  {
    number: "3.",
    text: (
      <>
        Be sure the entire sticker is attached to the opaque transfer sheet.
        <br />
        Apply to a smooth surface such as a window. Use credit/ID card to help
        smooth down the decal to the surface.
      </>
    ),
  },
  {
    number: "4.",
    text: (
      <>
        Peel the transfer tape away from the vinyl sticker, <strong>slowly</strong>.
      </>
    ),
  },
];

const videos = [
  {
    url: "https://www.youtube.com/embed/TL1YqPkrbaE",
    title: "Vinyl Sticker Application Instructions",
  },
  {
    url: "https://www.youtube.com/embed/AWEoTtP6vxw",
    title: "Sticker Install Example",
  },
];

export default function ApplyPage() {
  return (
    <section className="w-full max-w-[940px] mx-auto px-8 py-16 text-neutral-700 font-sans">

      {/* Small screen heading (only visible on mobile) */}
      <div className="md:hidden mb-6">
        <h1 className="text-[16px] font-bold leading-snug text-center mb-14">
          Transfer sticker application instructions
        </h1>
        <h2 className="text-[17px] font-bold text-neutral-700 leading-snug text-left">
          Apply your transfer sticker in no time.
        </h2>
      </div>

      {/* Desktop heading */}
      <h1 className="hidden md:block text-[22px] font-bold text-center mb-12 leading-snug">
        Transfer sticker application instructions
      </h1>

      {/* Layout */}
      <div className="grid md:grid-cols-3 gap-10 mb-16">
        {/* Left heading (only visible on medium and up) */}
        <div className="hidden md:flex flex-col justify-start items-start space-y-60">
          <h2 className="text-2xl font-bold text-neutral-600 leading-snug tracking-tight">
            Apply your transfer <br /> sticker in no time.
          </h2>
        </div>

        {/* Steps */}
        <div className="md:col-span-2 space-y-8">
          {/* Left heading positioned above step 1 on mobile */}
          <div className="md:hidden mb-2" />

          {steps.map((step, idx) => (
            <div key={idx}>
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-neutral-500">{step.number}</span>
                <p className="text-[14px] font-semibold pl-5 leading-[1.6] text-neutral-500">
                  {step.text}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <Separator className="my-4 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Videos */}
      {videos.map((video, idx) => (
        <div
          key={idx}
          className={`w-full max-w-3xl mx-auto aspect-video ${
            idx === 0 ? "mb-10" : ""
          } rounded-md overflow-hidden shadow border border-gray-300`}
        >
          <iframe
            src={video.url}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </section>
  );
}

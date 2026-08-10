import Image from "next/image";

export const metadata = {
  title: "About | Ansh Kedia",
  description: "About Ansh Kedia, Software Engineer",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-12 px-4 md:px-12 selection:bg-white selection:text-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full min-h-[75vh]">
        
        {/* Left Side: Huge Name */}
        <div className="lg:col-span-5 flex flex-col justify-end pb-8">
          <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] leading-[0.9] tracking-tighter font-medium mb-6">
            Ansh<br />Kedia
          </h1>
          <p className="text-white/50 text-lg md:text-xl font-light">
            Software Engineer - India
          </p>
        </div>

        {/* Middle Side: Portrait Image */}
        <div className="lg:col-span-4 relative rounded-xl overflow-hidden h-[50vh] lg:h-auto min-h-[500px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/anshkedia.jpg"
            alt="Ansh Kedia Portrait"
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Right Side: Bio Text */}
        <div className="lg:col-span-3 flex flex-col justify-center text-white/60 text-sm md:text-base gap-6 leading-relaxed lg:pl-8 py-8 lg:py-0">
          <p>
            Software engineer working at the intersection of design and code. I design and build fully custom web experiences end to end, from first Figma frame to production build. Lately that includes AI-native apps and enterprise platforms.
          </p>

          <p>
            An AI-augmented workflow sits at the core of how I ship. I currently work at Capgemini, engineering intelligent systems. I move fast and treat shipping as the only proof that something is real.
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-4 items-start">
              <span className="text-white/30 text-lg leading-none">/</span>
              <p className="text-sm">
                Engineer on scalable component systems and POS command centres built for high performance and offline capabilities.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-white/30 text-lg leading-none">/</span>
              <p className="text-sm">
                Built MVPs and deep learning computer vision prototypes (like VisionMouse and AirTune) to validate new venture ideas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

// 1. Data Source
const clients = [
  {
    name: "Bajaj Auto",
    logo: "/bajaj-logo.png",
  },
  {
    name: "Mask Polymer – Talegaon",
    logo: "/mask-polymer.png",
  },
  {
    name: "MIT College – Kothrud",
    logo: "/mit-logo.png",
  },
  {
    name: "Mahindra",
    logo: "/mahindra-logo.jpg",
  },
  {
    name: "Lemon Tree Hotels",
    logo: "/lemontree-logo.png",
  },
  {
    name: "Malpani Group",
    logo: "/malpani-logo.png",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl font-bold text-center">Our Clients</h2>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* Left Fade Mask (Soft white fade on the left edge) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

        {/* Right Fade Mask (Soft white fade on the right edge) */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {/* Loop 1: Original List */}
          <div className="flex items-center gap-12 mx-6">
            {clients.map((client, index) => (
              <ClientItem
                key={`original-${index}`}
                name={client.name}
                logo={client.logo}
              />
            ))}
          </div>

          {/* Loop 2: Duplicate List (For Seamless Infinity) */}
          <div className="flex items-center gap-12 mx-6">
            {clients.map((client, index) => (
              <ClientItem
                key={`duplicate-${index}`}
                name={client.name}
                logo={client.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. Client Item Component
function ClientItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 group/item cursor-pointer min-w-[140px]">
      {/* THE FRAME: Fixed width (w-32) and height (h-16) ensures all logos occupy equal space */}
      <div className="relative w-32 h-16 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="128px"
          // STYLING EXPLAINED:
          // object-contain: Fits image without distortion
          // REMOVED: grayscale & opacity-60 (Now shows actual color by default)
          // group-hover: Scale up (1.1x) and subtle lift (-translate-y-1) for interaction
          className="object-contain transition-transform duration-300 ease-in-out group-hover/item:scale-110 group-hover/item:-translate-y-1"
        />
      </div>

      {/* Text Label */}
      <span className="text-sm font-semibold text-gray-500 group-hover/item:text-gray-900 transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

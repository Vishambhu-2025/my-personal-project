import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] md:h-screen">
      <Image
        src="/hero.png"
        alt="Hero"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight drop-shadow-xl cursor-pointer">
          Reliable, Comfortable & Affordable Travel
        </h1>

        <p className="mt-3 text-lg cursor-pointer md:text-xl drop-shadow-lg transition-colors duration-300 hover:text-gray-200">
          Corporate | Car Rentals | Transport Solutions
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full h-[55vh] md:h-[70vh]">
      <Image
        src="/whychooseus.png"
        alt="Why Choose Us"
        fill
        className="
        object-cover 
        brightness-[0.65]
        object-[20%]        
        md:object-center     
      "
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Why Choose Us
        </h2>

        <ul className="text-lg md:text-xl space-y-3 font-medium drop-shadow-md">
          <li>✔ 110+ well-maintained buses</li>
          <li>✔ 300+ employee transportation trips daily</li>
          <li>✔ Professionally trained drivers</li>
          <li>✔ Real-time fleet monitoring</li>
          <li>✔ 24/7 support & operations team</li>
          <li>✔ Safety-focused & punctual service</li>
        </ul>
      </div>
    </section>
  );
}

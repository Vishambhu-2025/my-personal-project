import Link from "next/link";

export default function Welcome() {
  return (
    <section id="about" className="py-18 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Welcome to Vishambhu Travels Management Pvt Ltd!
      </h2>

      <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
        At Vishambhu Travels, we specialize in providing reliable and
        well-organized bus transportation services for corporate employees. Our
        goal is to make daily commuting smoother, safer, and stress-free by
        offering dedicated routes, comfortable buses, and professionally managed
        operations. With our structured transportation solutions, companies can
        ensure punctuality, improve employee well-being, and reduce overall
        travel-related hassles.
      </p>

      <Link
        href="https://wa.me/919112143483?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20corporate%20bus%20services."
        target="_blank"
        className="inline-block mt-9 px-6 py-2 bg-black text-white rounded-md"
      >
        Know More
      </Link>
    </section>
  );
}

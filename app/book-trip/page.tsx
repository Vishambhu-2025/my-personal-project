import BookingForm from "@/components/BookingForm";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Book Your Trip - Vishambhu Travels",
  description:
    "Book your trip and fill your company details with Vishambhu Travels.",
};

export default function BookTripPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Background"
        fill
        className="object-cover brightness-50 z-0"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>

      <main className="relative z-10 pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-12 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all hover:bg-white/20 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              Book your trip and fill your company details
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg drop-shadow-lg">
              Please provide your trip details below. Once submitted, you will
              be redirected to WhatsApp to finalize your booking with our team.
            </p>
          </div>

          <BookingForm />
        </div>
      </main>
    </div>
  );
}

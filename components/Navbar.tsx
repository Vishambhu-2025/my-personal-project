"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      {/* FIX: Changed to Flex for mobile, Grid for desktop */}
      <div className="w-full flex justify-between items-center md:grid md:grid-cols-3 py-3">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2 pl-3 md:pl-4">
          <Image
            src="/logo.webp"
            alt="Vishambhu Travels Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-bold text-lg md:text-xl whitespace-nowrap">
            Vishambhu Travels
          </span>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex justify-center gap-10 font-medium text-black">
          {[
            { label: "Home", link: "#home" },
            { label: "About", link: "#about" },
            { label: "Services", link: "#services" },
            // { label: "Clients", link: "#clients" },
            { label: "Contact Us", link: "#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="relative whitespace-nowrap group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Side: Button / Menu */}
        <div className="flex justify-end items-center gap-4 pr-3 md:pr-4">
          <Link
            href="https://wa.me/919112143483"
            target="_blank"
            className="hidden md:block px-5 py-2 bg-black text-white rounded-md text-sm shadow-sm hover:opacity-90 transition whitespace-nowrap"
          >
            Enquire Now
          </Link>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow px-4 py-4 space-y-4">
          <div className="flex flex-col gap-4 text-lg font-medium">
            <Link href="#home" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="#services" onClick={() => setOpen(false)}>
              Services
            </Link>
            {/* <Link href="#clients" onClick={() => setOpen(false)}>
              Clients
            </Link> */}
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </div>

          <Link
            href="https://wa.me/919112143483?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services%20for%20a%20booking.
"
            target="_blank"
            className="block bg-black text-white text-center py-2 rounded-md mt-4"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h4 className="font-bold mb-2">Vishambhu Travels</h4>
          <p className="text-gray-400 text-sm">Safety & Trust Matters</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            {[
              { label: "Home", link: "#home" },
              { label: "About", link: "#about" },
              { label: "Contact", link: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className="hover:text-white transition-all duration-300 inline-block hover:translate-x-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-bold mb-2">Contact</h4>

          {/* Phone */}
          <p className="text-gray-400 text-sm flex items-center gap-2 mb-2 hover:text-white transition-all duration-300 hover:translate-x-1">
            <Phone size={16} className="transition-colors duration-300" />
            <Link
              href="tel:+919112143483"
              className="transition-colors duration-300"
            >
              +91-9112143483
            </Link>
          </p>

          {/* Email */}
          <p className="text-gray-400 text-sm flex items-center gap-2 mb-2 hover:text-white transition-all duration-300 hover:translate-x-1">
            <Mail size={16} className="transition-colors duration-300" />
            <Link
              href="mailto:vikas@vishambhutravels.com"
              className="transition-colors duration-300"
            >
              vikas@vishambhutravels.com
            </Link>
          </p>
          {/* Email */}
          <p className="text-gray-400 text-sm flex items-center gap-2 mb-2 hover:text-white transition-all duration-300 hover:translate-x-1">
            <Mail size={16} className="transition-colors duration-300" />
            <Link
              href="mailto:sachin@vishambhutravels.com"
              className="transition-colors duration-300"
            >
              sachin@vishambhutravels.com
            </Link>
          </p>

          {/* Address */}
          <p className="flex items-start gap-2 text-gray-400 text-sm hover:text-white transition mt-2">
            <MapPin size={16} className="mt-1" />
            <Link
              href="https://maps.app.goo.gl/5farpjhRFF73YGQs8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sr No 99/5, Nakhate Complex, Vijay Nagar
              <br />
              Pimpri-Chinchwad, Maharashtra 411017
            </Link>
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-6">
        © 2025 Vishambhu Travels. All rights reserved.
      </p>
    </footer>
  );
}

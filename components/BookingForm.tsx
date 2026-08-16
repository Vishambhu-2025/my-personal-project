"use client";

import { useState } from "react";
import { getWhatsAppLink, formatBookingMessage } from "@/lib/whatsapp";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    fromLocation: "",
    toLocation: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    contactNumber: "",
    fromLocation: "",
    toLocation: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      contactNumber: "",
      fromLocation: "",
      toLocation: "",
      date: "",
    };

    // Name validation: min 2 characters
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Contact number validation: 10 digits regex
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid 10-digit number";
      isValid = false;
    }

    // From location validation: min 3 characters
    if (!formData.fromLocation.trim()) {
      newErrors.fromLocation = "From location is required";
      isValid = false;
    } else if (formData.fromLocation.trim().length < 3) {
      newErrors.fromLocation = "Location must be at least 3 characters";
      isValid = false;
    }

    // To location validation: min 3 characters
    if (!formData.toLocation.trim()) {
      newErrors.toLocation = "To location is required";
      isValid = false;
    } else if (formData.toLocation.trim().length < 3) {
      newErrors.toLocation = "Location must be at least 3 characters";
      isValid = false;
    }

    // Date validation
    if (!formData.date.trim()) {
      newErrors.date = "Travel date is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const message = formatBookingMessage(formData);
      const link = getWhatsAppLink(message);
      window.open(link, "_blank");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Contact Number *
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
            errors.contactNumber ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter contact number"
        />
        {errors.contactNumber && (
          <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="fromLocation"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          From Location *
        </label>
        <input
          type="text"
          id="fromLocation"
          name="fromLocation"
          value={formData.fromLocation}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
            errors.fromLocation ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Departure city/location"
        />
        {errors.fromLocation && (
          <p className="text-red-500 text-xs mt-1">{errors.fromLocation}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="toLocation"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          To Location *
        </label>
        <input
          type="text"
          id="toLocation"
          name="toLocation"
          value={formData.toLocation}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
            errors.toLocation ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Destination city/location"
        />
        {errors.toLocation && (
          <p className="text-red-500 text-xs mt-1">{errors.toLocation}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Travel Date *
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
            errors.date ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.date && (
          <p className="text-red-500 text-xs mt-1">{errors.date}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors"
      >
        Book Trip
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        * You will be redirected to WhatsApp to confirm your booking.
      </p>
    </form>
  );
}

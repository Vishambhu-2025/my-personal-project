const items = [
  "Bus Rental Services",
  "Car Rental Services",
  "Fleet Operations",
  "Employee Mobility",
  "Tour Services",
  "On-Demand Cars",
  "Custom Vehicle Booking",
  "Transport Management",
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((service) => (
            <div
              key={service}
              className="bg-white shadow-sm p-6 text-center text-sm md:text-base font-medium rounded-lg 
                       hover:shadow-xl hover:-translate-y-1 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

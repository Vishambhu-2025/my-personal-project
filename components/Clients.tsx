const clients = [
  "Bajaj Auto - Chakan",
  "Bajaj Auto – Akurdi",
  "Mask Polymer – Talegaon",
  "Orien Industries – Chakan",
  "MIT College – Kothrud",
  "Shiv Ganga Caterers",
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client}
            className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center text-sm md:text-base font-medium"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}

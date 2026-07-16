function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      review:
        "This platform transformed the way our team collaborates. It's fast, intuitive, and incredibly reliable.",
    },
    {
      name: "David Lee",
      role: "Startup Founder",
      review:
        "The AI-powered features saved us hours every week. Highly recommended!",
    },
    {
      name: "Emily Carter",
      role: "Marketing Lead",
      review:
        "Clean interface, excellent support, and amazing performance across all devices.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-slate-100 rounded-xl p-6 shadow-lg"
          >
            <p className="text-gray-600 italic mb-6">
              "{item.review}"
            </p>

            <h3 className="text-xl font-bold">{item.name}</h3>

            <p className="text-blue-600">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
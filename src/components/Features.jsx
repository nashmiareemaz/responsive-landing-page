function Features() {
  const features = [
    {
      title: "AI Automation",
      description: "Automate repetitive tasks using powerful AI tools.",
      icon: "🤖",
    },
    {
      title: "Secure Storage",
      description: "Your data is encrypted and safely stored in the cloud.",
      icon: "🔒",
    },
    {
      title: "Analytics",
      description: "Track your performance with real-time insights.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-100 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>

            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
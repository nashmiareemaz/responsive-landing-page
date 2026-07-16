function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      features: ["1 User", "Basic Support", "5 Projects"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      features: ["10 Users", "Priority Support", "Unlimited Projects"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      features: ["Unlimited Users", "24/7 Support", "Custom Solutions"],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-100 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Pricing Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 shadow-lg ${
              plan.highlight
                ? "bg-blue-600 text-white scale-105"
                : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

            <p className="text-5xl font-bold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <button
              className={`px-6 py-3 rounded-lg font-semibold ${
                plan.highlight
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
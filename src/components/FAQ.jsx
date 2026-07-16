function FAQ() {
  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! You can start with our free trial for 14 days.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. There are no long-term contracts.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our support team is available 24/7.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              {faq.question}
            </h3>

            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
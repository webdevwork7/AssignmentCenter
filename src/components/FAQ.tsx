import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does your assignment help service work?",
      answer:
        "Our process is simple: submit your assignment requirements, get matched with a qualified expert in your subject area, receive personalized guidance and support, and get your completed work with explanations to help you understand the concepts better.",
    },
    {
      question: "Are your writers qualified and experienced?",
      answer:
        "Yes, all our writers hold advanced degrees (Master's or PhD) from accredited universities and have extensive experience in academic writing. They undergo a rigorous selection process and background verification before joining our team.",
    },
    {
      question: "Is the work you provide original and plagiarism-free?",
      answer:
        "Absolutely. We guarantee 100% original content. Every assignment is written from scratch according to your specific requirements and is checked through advanced plagiarism detection software before delivery.",
    },
    {
      question: "What subjects and academic levels do you cover?",
      answer:
        "We cover a wide range of subjects including Business, Engineering, Literature, Psychology, Computer Science, Mathematics, and many more. We assist students from high school to PhD level across various academic disciplines.",
    },
    {
      question: "How do you ensure the quality of assignments?",
      answer:
        "Our quality assurance process includes multiple review stages: expert writing, thorough editing, plagiarism checking, and final quality review. We also provide free revisions if the work doesn't meet your requirements.",
    },
    {
      question: "What are your pricing and payment options?",
      answer:
        "Our pricing is competitive and transparent, based on factors like academic level, deadline, and complexity. We offer secure payment options and never charge hidden fees. You can get a free quote by submitting your assignment details.",
    },
    {
      question: "Can you handle urgent assignments?",
      answer:
        "Yes, we can accommodate urgent deadlines. However, we recommend placing orders with reasonable time frames to ensure the best quality. Rush orders may incur additional charges but we strive to maintain our quality standards.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "We offer 24/7 customer support through multiple channels including email and phone. Our support team is always ready to assist you with any questions or concerns about your assignments.",
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer:
        "We offer free unlimited revisions within a specified timeframe if the work doesn't meet your original requirements. If you're still not satisfied, we have a money-back guarantee policy to ensure your complete satisfaction.",
    },
    {
      question: "Is my personal information kept confidential?",
      answer:
        "Yes, we take privacy very seriously. All your personal information and assignment details are kept strictly confidential. We never share your information with third parties and use secure systems to protect your data.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 rainbow-bg-1 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-8">
            <span className="text-purple-700 font-bold text-lg flex items-center">
              <HelpCircle className="mr-2 h-5 w-5" />
              FAQ
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our assignment help services,
            quality assurance, and support process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/90 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-600" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions
              about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl text-lg transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-2xl text-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

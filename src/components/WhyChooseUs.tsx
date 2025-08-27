import { CheckCircle, Award, Clock, Shield, Users, Star } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Expert Writers",
      description:
        "PhD qualified writers with 10+ years of experience in academic writing",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you anytime, anywhere",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "100% Plagiarism Free",
      description:
        "Original content with comprehensive plagiarism reports included",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Users,
      title: "50+ Subjects",
      description:
        "Coverage across major academic disciplines and specializations",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description:
        "Consistently high ratings from thousands of satisfied students",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: CheckCircle,
      title: "Money Back Guarantee",
      description:
        "100% refund if you're not satisfied with our service quality",
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section className="py-20 rainbow-bg-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Assignments Center?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another writing service. We're your academic success
            partners with proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

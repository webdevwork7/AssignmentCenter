import {
  DollarSign,
  Clock,
  Shield,
  Users,
  CheckCircle,
  BookOpen,
  Award,
  Headphones,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const StatsSection = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates designed with students' budgets in mind",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We respect deadlines and deliver your work on time, every time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Multiple quality checks ensure your assignment meets academic standards",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Expert Writers",
      description:
        "Qualified professionals with advanced degrees in their respective fields",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: CheckCircle,
      title: "Original Content",
      description:
        "100% plagiarism-free work written specifically for your requirements",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: BookOpen,
      title: "All Subjects Covered",
      description: "Comprehensive coverage across various academic disciplines",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "Focus on helping you achieve better grades and understanding",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Friendly support team available to assist you throughout the process",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 rainbow-bg-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Top Assignment Writing Services{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              At Affordable Price!
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe quality academic assistance should be accessible to all
            students. Our services combine excellence with affordability to
            support your educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Philosophy Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Affordable Services?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand that students have budget constraints. That's why
              we've designed our pricing structure to be student-friendly while
              maintaining the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Transparent Pricing
              </h4>
              <p className="text-gray-600">
                No hidden fees or surprise charges. You know exactly what you're
                paying for upfront.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Value for Money
              </h4>
              <p className="text-gray-600">
                Get premium quality work at prices that won't break your student
                budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Quality Guarantee
              </h4>
              <p className="text-gray-600">
                Affordable doesn't mean compromising on quality. We maintain
                high standards in every project.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Success Story?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Become part of our growing community of 1,800+ happy students who
            have achieved their academic goals with our help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl text-lg transition-colors">
              Start Your Success Story
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-2xl text-lg transition-colors">
              Call Now: {siteConfig.phone}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import { Users, FileText, Award, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Happy Students",
      description: "Students worldwide trust us",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      number: "8,000+",
      label: "Assignments Completed",
      description: "Successfully delivered projects",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Students achieve A+ grades",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Expert Support",
      description: "Round the clock assistance",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 rainbow-bg-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">
              Our Achievement
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Impact in{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These numbers tell the story of our commitment to student success
            and academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>

                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {stat.label}
                  </h3>

                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Success Story?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Become part of our growing community of 2,500+ happy customers who
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

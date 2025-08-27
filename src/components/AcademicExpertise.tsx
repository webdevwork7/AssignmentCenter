import {
  BookOpen,
  Calculator,
  Microscope,
  Briefcase,
  Code,
  Palette,
  Globe,
  Heart,
  Gavel,
  TrendingUp,
  Building,
  Cpu,
} from "lucide-react";

const AcademicExpertise = () => {
  const subjects = [
    {
      icon: BookOpen,
      name: "Literature & English",
      description: "Essays, research papers, creative writing",
      color: "from-purple-500 to-purple-600",
      popular: true,
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Calculus, statistics, algebra, geometry",
      color: "from-blue-500 to-blue-600",
      popular: true,
    },
    {
      icon: Microscope,
      name: "Sciences",
      description: "Biology, chemistry, physics, lab reports",
      color: "from-green-500 to-green-600",
      popular: true,
    },
    {
      icon: Briefcase,
      name: "Business Studies",
      description: "Management, marketing, finance, case studies",
      color: "from-orange-500 to-orange-600",
      popular: true,
    },
    {
      icon: Code,
      name: "Computer Science",
      description: "Programming, algorithms, software engineering",
      color: "from-indigo-500 to-indigo-600",
      popular: false,
    },
    {
      icon: Heart,
      name: "Psychology",
      description: "Research methods, case studies, behavioral analysis",
      color: "from-pink-500 to-pink-600",
      popular: false,
    },
    {
      icon: Gavel,
      name: "Law",
      description: "Legal research, case analysis, jurisprudence",
      color: "from-red-500 to-red-600",
      popular: false,
    },
    {
      icon: TrendingUp,
      name: "Economics",
      description: "Microeconomics, macroeconomics, econometrics",
      color: "from-teal-500 to-teal-600",
      popular: false,
    },
    {
      icon: Building,
      name: "Engineering",
      description: "Technical reports, project analysis, design",
      color: "from-gray-500 to-gray-600",
      popular: false,
    },
    {
      icon: Globe,
      name: "Social Sciences",
      description: "Sociology, anthropology, political science",
      color: "from-emerald-500 to-emerald-600",
      popular: false,
    },
    {
      icon: Palette,
      name: "Arts & Humanities",
      description: "Art history, philosophy, cultural studies",
      color: "from-violet-500 to-violet-600",
      popular: false,
    },
    {
      icon: Cpu,
      name: "Information Technology",
      description: "Database design, networking, cybersecurity",
      color: "from-cyan-500 to-cyan-600",
      popular: false,
    },
  ];

  const popularSubjects = subjects.filter((subject) => subject.popular);
  const otherSubjects = subjects.filter((subject) => !subject.popular);

  return (
    <section className="py-20 rainbow-bg-2 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-8">
            <span className="text-purple-700 font-bold text-lg flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Academic Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Subject Areas
            </span>{" "}
            We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our expert tutors and writers specialize in a comprehensive range of
            academic disciplines, ensuring you get qualified assistance
            regardless of your field of study.
          </p>
        </div>

        {/* Popular Subjects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Most Popular Subjects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSubjects.map((subject, index) => {
              const IconComponent = subject.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20"
                >
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${subject.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {subject.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {subject.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Subjects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Subject Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherSubjects.map((subject, index) => {
              const IconComponent = subject.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${subject.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {subject.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {subject.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Levels */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Academic Levels We Support
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">HS</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">High School</h4>
              <p className="text-gray-600 text-sm">Grades 9-12</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">UG</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Undergraduate
              </h4>
              <p className="text-gray-600 text-sm">Bachelor's Degree</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">PG</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Postgraduate</h4>
              <p className="text-gray-600 text-sm">Master's Degree</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">PhD</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Doctoral</h4>
              <p className="text-gray-600 text-sm">PhD & Research</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Don't See Your Subject?</h3>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              We cover many more specialized subjects and interdisciplinary
              fields. Contact us to discuss your specific academic needs.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl text-lg transition-colors">
              Get Subject-Specific Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExpertise;

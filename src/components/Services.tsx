import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  FileText,
  GraduationCap,
  PenTool,
  Calculator,
  Globe,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Essay Writing Services",
      description:
        "Professional essay writing for all academic levels with perfect structure and compelling arguments.",
      price: "Starting from $15",
      features: [
        "Original Content",
        "Free Revisions",
        "APA/MLA Format",
        "24/7 Support",
      ],
      color: "from-purple-500 to-purple-600",
      popular: true,
    },
    {
      icon: FileText,
      title: "Research Papers",
      description:
        "In-depth research papers with comprehensive analysis and multiple credible sources.",
      price: "Starting from $20",
      features: [
        "Detailed Research",
        "Multiple Sources",
        "Proper Citations",
        "Methodology",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: GraduationCap,
      title: "Thesis & Dissertation",
      description:
        "Complete thesis and dissertation assistance from proposal to defense.",
      price: "Starting from $25",
      features: [
        "Chapter-wise Delivery",
        "Data Analysis",
        "Defense Prep",
        "Unlimited Revisions",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: PenTool,
      title: "Assignment Help",
      description:
        "Comprehensive assignment support across all subjects with step-by-step solutions.",
      price: "Starting from $12",
      features: [
        "All Subjects",
        "Step-by-step Solutions",
        "Timely Delivery",
        "Quality Assurance",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calculator,
      title: "Math & Statistics",
      description:
        "Expert help with mathematical problems and statistical analysis using advanced tools.",
      price: "Starting from $18",
      features: [
        "Step-by-step Solutions",
        "SPSS/R/Excel",
        "Data Visualization",
        "Statistical Tests",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Online Course Help",
      description:
        "Complete online course assistance including assignments, quizzes, and discussions.",
      price: "Starting from $200",
      features: [
        "Full Course Support",
        "Quiz Assistance",
        "Discussion Posts",
        "Exam Prep",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-purple-700 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Academic Solutions
            </span>{" "}
            for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From essays to dissertations, we provide comprehensive academic
            support with guaranteed quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 p-1 rainbow-border"
              >
                <div className="bg-white rounded-lg p-6 h-full">
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed text-center">
                      {service.description}
                    </p>

                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {service.price}
                        <span className="text-sm font-normal text-gray-500 ml-1">
                          /page
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-700 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now: +1 (808) 229-4449
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We offer custom solutions for unique academic requirements.
              Contact us to discuss your specific needs.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

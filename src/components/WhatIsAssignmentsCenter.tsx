import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Users,
  Shield,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhatIsAssignmentsCenter = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Writing Support",
      description:
        "Professional assistance with essays, research papers, and assignments across various subjects",
    },
    {
      icon: Users,
      title: "Expert Tutors",
      description:
        "Qualified academic writers with advanced degrees and years of teaching experience",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Original, plagiarism-free content with thorough quality checks and revisions",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Reliable service that meets your deadlines without compromising on quality",
    },
  ];

  const experts = [
    {
      name: "Dr. Sarah Johnson",
      field: "Literature & English",
      experience: "10+ Years Experience",
      rating: 4.9,
      image: "👩‍🎓",
    },
    {
      name: "Prof. Michael Chen",
      field: "Business & Management",
      experience: "12+ Years Experience",
      rating: 4.8,
      image: "👨‍💼",
    },
    {
      name: "Dr. Emily Rodriguez",
      field: "Science & Engineering",
      experience: "8+ Years Experience",
      rating: 4.9,
      image: "👩‍🔬",
    },
  ];

  return (
    <section className="py-20 rainbow-bg-1 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">
              About Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What is{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Assignments Center?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Assignments Center is a trusted academic support platform that
            connects students with qualified tutors and writers. We provide
            personalized assistance to help students understand complex
            concepts, improve their writing skills, and achieve better academic
            outcomes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe every student deserves access to quality academic
                support. Our mission is to bridge the gap between challenging
                coursework and student success by providing personalized,
                ethical academic assistance that promotes learning and
                understanding.
              </p>

              <div className="space-y-4">
                {[
                  "Personalized tutoring and writing support",
                  "Ethical academic assistance that promotes learning",
                  "24/7 customer support and guidance",
                  "Affordable pricing for students",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Help
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced tutors work closely with students to provide
                step-by-step guidance, explain complex concepts, and help
                develop critical thinking skills. We focus on teaching
                methodology and academic best practices rather than just
                providing answers.
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/90 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expert Profiles */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Meet Our Expert Tutors
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/90 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{expert.image}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {expert.name}
                </h4>
                <p className="text-purple-600 font-medium mb-2">
                  {expert.field}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {expert.experience}
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Award
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    ({expert.rating})
                  </span>
                </div>
                <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm px-4 py-2">
                  Hire Expert
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have improved their academic
              performance with our expert guidance and support.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Get Expert Help Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAssignmentsCenter;

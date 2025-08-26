import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 rainbow-bg-1">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Assignments Center
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering students worldwide with exceptional academic support and
            expert guidance since 2015.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 p-8">
              <CardContent className="space-y-6">
                <Target className="h-12 w-12 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional academic assistance that empowers
                  students to achieve their educational goals while maintaining
                  the highest standards of quality, integrity, and originality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 p-8">
              <CardContent className="space-y-6">
                <Lightbulb className="h-12 w-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's most trusted academic support platform,
                  fostering a global community of learners and experts dedicated
                  to academic excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 rainbow-bg-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our
                  interactions and services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for perfection in every assignment and exceed
                  expectations consistently.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Support
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive support to ensure every student
                  succeeds in their academic journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of students who trust us with their academic success.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

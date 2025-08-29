import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const ContactCTA = () => {
  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
              <Zap className="mr-2 h-5 w-5" />
              Get Started Today
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch With Our{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Assignment Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to excel in your studies? Our expert team is available 24/7 to
            help you achieve academic success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-100 hover:border-green-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                Call Us Now
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Speak directly with our assignment experts for immediate
                assistance and personalized guidance.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-6">
                {siteConfig.phone}
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Email Support
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send us your requirements via email and get detailed responses
                from our academic professionals.
              </p>
              <div className="text-lg font-bold text-blue-600 mb-6">
                {siteConfig.email}
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 shadow-lg">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>

        {/* Urgent Help CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Star className="h-6 w-6 text-yellow-300" />
              <span className="font-semibold">
                Need Urgent Assignment Help?
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Don't Wait Until The Last Minute!
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us now and let our experts handle your assignments while
              you focus on other important tasks.
            </p>
            <Button
              size="lg"
              onClick={scrollToContactForm}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg"
            >
              <Phone className="mr-2 h-6 w-6" />
              Get Instant Quote
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

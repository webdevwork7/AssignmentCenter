import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 rainbow-bg-2">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms & Conditions
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using our services, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Assignments Center provides academic writing and tutoring
                services to students worldwide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Users are responsible for providing accurate information and
                using our services ethically and legally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditionsPage;

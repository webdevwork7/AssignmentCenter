
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, CheckCircle } from 'lucide-react';
import OrderForm from './OrderForm';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center rainbow-bg-1 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left column - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-purple-600" />
                <span className="text-gray-600">10,000+ Happy Students</span>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Academic Excellence
                </span>
                <br />
                <span className="text-gray-900">Made Simple</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Get professional assignment help from expert writers. Quality work, 
                timely delivery, and 100% plagiarism-free content guaranteed.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg">
                Order Now
                <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg">
                View Samples
              </Button>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 pt-4 lg:pt-6">
              {[
                "100% Plagiarism Free",
                "24/7 Customer Support",
                "Money Back Guarantee",
                "On-Time Delivery"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 lg:h-5 w-4 lg:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm lg:text-base text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Order Form */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-sm lg:max-w-md">
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

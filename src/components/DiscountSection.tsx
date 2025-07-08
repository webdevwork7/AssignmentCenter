
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift, Percent, Clock } from 'lucide-react';

const DiscountSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Gift className="h-6 w-6" />
            <span className="font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get <span className="text-yellow-300">20% Discount</span>
            <br />on Every Second Assignment Help Order!
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take advantage of our special offer and save on multiple orders. Quality academic help 
            has never been more affordable!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <Percent className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">20% OFF</h3>
              <p className="text-purple-100">On your second order</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-purple-100">Same day turnaround available</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <Gift className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Free Extras</h3>
              <p className="text-purple-100">Plagiarism report & revisions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Claim Discount Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
              Learn More
            </Button>
          </div>

          <div className="mt-8 text-purple-200">
            <p className="text-sm">*Valid for new customers only. Terms and conditions apply.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;

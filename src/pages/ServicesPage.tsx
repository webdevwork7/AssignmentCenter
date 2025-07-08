
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, FileText, GraduationCap, PenTool, Calculator, Globe, Users, Clock, Shield, Award, CheckCircle, Star, Phone } from 'lucide-react';

const ServicesPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    {
      icon: BookOpen,
      title: "Essay Writing Services",
      description: "Professional essay writing for all academic levels with perfect structure, compelling arguments, and proper citations.",
      price: "Starting from $15",
      features: ["Original Content", "Free Revisions", "APA/MLA/Chicago Format", "24/7 Support"],
      color: "from-purple-500 to-purple-600",
      popular: true,
      detailedFeatures: [
        "Argumentative Essays", "Narrative Essays", "Descriptive Essays", "Expository Essays",
        "Compare & Contrast", "Cause & Effect", "Process Essays", "Critical Analysis"
      ]
    },
    {
      icon: FileText,
      title: "Research Papers",
      description: "In-depth research papers with comprehensive analysis, multiple credible sources, and proper methodology.",
      price: "Starting from $20",
      features: ["Detailed Research", "Multiple Sources", "Proper Citations", "Methodology"],
      color: "from-pink-500 to-pink-600",
      detailedFeatures: [
        "Literature Review", "Case Studies", "White Papers", "Position Papers",
        "Term Papers", "Research Proposals", "Annotated Bibliography", "Abstract Writing"
      ]
    },
    {
      icon: GraduationCap,
      title: "Thesis & Dissertation",
      description: "Complete thesis and dissertation assistance from proposal to defense with expert guidance.",
      price: "Starting from $25",
      features: ["Chapter-wise Delivery", "Data Analysis", "Defense Prep", "Unlimited Revisions"],
      color: "from-blue-500 to-blue-600",
      detailedFeatures: [
        "Thesis Proposal", "Literature Review", "Methodology Chapter", "Data Collection",
        "Results & Discussion", "Conclusion Chapter", "Defense Preparation", "Formatting"
      ]
    },
    {
      icon: PenTool,
      title: "Assignment Help",
      description: "Comprehensive assignment support across all subjects with step-by-step solutions and explanations.",
      price: "Starting from $12",
      features: ["All Subjects", "Step-by-step Solutions", "Timely Delivery", "Quality Assurance"],
      color: "from-green-500 to-green-600",
      detailedFeatures: [
        "Homework Help", "Case Study Analysis", "Lab Reports", "Problem Solving",
        "Project Work", "Presentation Creation", "Report Writing", "Data Analysis"
      ]
    },
    {
      icon: Calculator,
      title: "Math & Statistics",
      description: "Expert help with mathematical problems, statistical analysis, and data interpretation using advanced tools.",
      price: "Starting from $18",
      features: ["Step-by-step Solutions", "SPSS/R/Excel", "Data Visualization", "Statistical Tests"],
      color: "from-orange-500 to-orange-600",
      detailedFeatures: [
        "Algebra & Calculus", "Statistics & Probability", "Data Analysis", "Regression Analysis",
        "Hypothesis Testing", "ANOVA", "Chi-square Tests", "Time Series Analysis"
      ]
    },
    {
      icon: Globe,
      title: "Online Course Help",
      description: "Complete online course assistance including assignments, quizzes, discussions, and exam preparation.",
      price: "Starting from $200",
      features: ["Full Course Support", "Quiz Assistance", "Discussion Posts", "Exam Prep"],
      color: "from-teal-500 to-teal-600",
      detailedFeatures: [
        "Course Modules", "Weekly Assignments", "Discussion Boards", "Online Quizzes",
        "Midterm Exams", "Final Projects", "Peer Reviews", "Course Completion"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Submit Your Requirements",
      description: "Fill out our simple order form with your assignment details, deadline, and specific requirements.",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "02",
      title: "Expert Assignment",
      description: "We match your project with the most qualified expert in your subject area and academic level.",
      color: "from-pink-500 to-pink-600"
    },
    {
      step: "03",
      title: "Quality Work Delivery",
      description: "Receive your completed assignment on time with free plagiarism report and quality assurance.",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "04",
      title: "Free Revisions",
      description: "Request unlimited revisions until you're completely satisfied with the quality of work.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 rainbow-bg-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
              <span className="text-purple-700 font-medium">Our Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Complete Academic
              </span>
              <br />
              Solutions Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From essays to dissertations, we provide comprehensive academic support across all subjects 
              and academic levels with guaranteed quality and timely delivery.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10,000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-600">Expert Writers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12">
            {allServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      {service.popular && (
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                      
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        {service.price}
                        <span className="text-sm font-normal text-gray-500 ml-2">/page</span>
                      </div>
                      
                      <ul className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now: +1 (555) 123-4567
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="bg-gradient-to-br from-gray-50 to-purple-50/50 border-0 p-8">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900 mb-4">What We Cover:</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {service.detailedFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 rainbow-bg-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting academic help has never been easier. Follow these simple steps to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Students <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Writers</h3>
                <p className="text-gray-600">PhD qualified writers with extensive academic experience</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-pink-50 to-blue-50 border-0">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-blue-50 to-green-50 border-0">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Original</h3>
                <p className="text-gray-600">Plagiarism-free content with detailed reports</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-purple-50 border-0">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">Money-back guarantee if not satisfied</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="h-6 w-6 text-yellow-300" />
            <span className="font-medium">Ready to Excel in Your Studies?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Achieve Academic Success
            <br />
            <span className="text-yellow-300">With Expert Guidance</span>
          </h2>
          
          <p className="text-xl text-green-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of students who have achieved academic success with our expert help. 
            Get started today and experience the difference quality makes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-300">98%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">  
              <div className="text-3xl font-bold text-yellow-300">24/7</div>
              <div className="text-green-100">Support Available</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-green-100">Expert Writers</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 (555) 123-4567
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-8 py-4 text-lg font-semibold shadow-lg">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const ContactPage = () => {
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
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert team. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form
                  action="https://formsubmit.co/webdevwork7@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Form Submission - Contact Page"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">{siteConfig.phone}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <Mail className="h-12 w-12 text-pink-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">{siteConfig.email}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <MapPin className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">{siteConfig.address}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Available 24/7
                  </h3>
                  <p className="text-gray-600">
                    We're here to help you anytime, anywhere
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

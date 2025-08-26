import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">{siteConfig.name}</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for academic excellence. We provide
              professional assignment help with guaranteed quality and timely
              delivery.
            </p>

            <div className="flex space-x-4">
              <Link
                to={siteConfig.social.facebook}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                to={siteConfig.social.twitter}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                to={siteConfig.social.instagram}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to={siteConfig.social.linkedin}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/returns-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-300">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-300">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-300">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2025 QUALCORE SOLUTIONS LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

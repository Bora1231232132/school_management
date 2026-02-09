import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logoWhite from "../../assets/e92c63db5878b0727474b90047a5609c2747e32f.png";

export function Footer() {
  return (
    <footer className="bg-[#182B70] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <a href="/" className="block">
            <img
              src={logoWhite}
              alt="Chea Chanto College Logo"
              className="h-16 w-auto"
            />
          </a>
          <p className="text-white/70 leading-relaxed">
            Where talent meets opportunity. Empowering the next generation of
            leaders through quality education and innovation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6">Explore</h3>
          <ul className="space-y-4 text-white/70">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Our School
              </a>
            </li>
            <li>
              <a
                href="/academic"
                className="hover:text-white transition-colors"
              >
                Academic Programs
              </a>
            </li>
            <li>
              <a
                href="/admission"
                className="hover:text-white transition-colors"
              >
                Admission Process
              </a>
            </li>
            <li>
              <a
                href="/campus-life"
                className="hover:text-white transition-colors"
              >
                Campus Life
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-white transition-colors">
                News & Events
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-lg mb-6">Support</h3>
          <ul className="space-y-4 text-white/70">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Scholarship info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Career Pathways
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Partner Organizations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="shrink-0 text-white" />
              <span>Phnom Penh, Cambodia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="shrink-0 text-white" />
              <span>+855 (0) 12 345 678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="shrink-0 text-white" />
              <span>info@cheachanto.edu.kh</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Chea Chanto College. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

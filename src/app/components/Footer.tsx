import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "../../assets/e92c63db5878b0727474b90047a5609c2747e32f.png";

export function Footer() {
  return (
    <footer className="bg-[#182B70] text-white font-sora pt-12 pb-8">
      <div className="max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px]">
        {/* Top: Landscape Logo (#I797:711;795:1383) */}
        <div className="mb-8">
          <Link to="/home" className="inline-block">
            <img
              src={logoWhite}
              alt="Chea Chanto College Logo"
              className="w-[200px] md:w-[240px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* 3 Main Navigation Columns (#I797:711;795:1386) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-12">
          {/* Column 1: Contact */}
          <div className="space-y-6">
            <h3 className="text-white text-[15px] font-bold">Contact</h3>
            <ul className="space-y-4 text-white/60 text-[15px]">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="shrink-0 text-white/80" />
                <span>Santuk District, Kampong Thom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-white/80" />
                <a
                  href="tel:+855889493577"
                  className="hover:text-white transition-colors"
                >
                  +855 (0)88 949 3577
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-white/80" />
                <a
                  href="mailto:cheachantocollege@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  cheachantocollege@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-6">
            <h3 className="text-white text-[15px] font-bold">Explore</h3>
            <ul className="space-y-4 text-white/60 text-[15px]">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Our School
                </Link>
              </li>
              <li>
                <Link
                  to="/academic"
                  className="hover:text-white transition-colors"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="hover:text-white transition-colors"
                >
                  Admission Process
                </Link>
              </li>
              <li>
                <Link
                  to="/campus-life"
                  className="hover:text-white transition-colors"
                >
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <h3 className="text-white text-[15px] font-bold">Support</h3>
            <ul className="space-y-4 text-white/60 text-[15px]">
              <li>
                <Link
                  to="/admission"
                  className="hover:text-white transition-colors"
                >
                  Scholarship info
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Partner Organizations
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Border & Copyright (#I797:711;795:1377) */}
        <div className="pt-6 border-t border-white/20">
          <p className="text-white/60 text-[15px]">
            © 2026 Chea Chanto College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

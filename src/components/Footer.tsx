'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">✨ Silverstar</h3>
            <p className="text-gray-300 text-sm">
              Professional glass installations for homes and businesses across DFW.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#services" className="hover:text-accent transition-colors">Windows</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Mirrors</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Shower Enclosures</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Screens</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Financing</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+14696165555" className="hover:text-accent transition-colors">
                  (469) 616-5555
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-gray-300">Dallas-Fort Worth, TX</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🌐</span>
                <span className="text-gray-300">Hablamos Español</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Silverstar Glass. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Volleyball } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Volleyball className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">FieldFinder</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making field bookings simple and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>medWal@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+212 123-456789</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>Lot arachad </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new fields and special offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
              />
              <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FieldFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
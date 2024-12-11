import React from 'react';
import { Timer } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function CTA() {
  return (
    <section className="py-24 bg-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-500 inline-flex items-center space-x-2 px-4 py-2 rounded-full text-emerald-50 mb-8">
            <Timer className="w-5 h-5" />
            <span>Limited Time Offer: 10% off your first booking!</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't wait, book your field now and enjoy a unique experience!
          </h2>
          
          <p className="text-emerald-50 mb-8 text-lg">
            Join thousands of satisfied players who've found their perfect field through FieldFinder.
          </p>
          
          <Link to="/signUp" className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-colors">
            Book Your Field Now
          </Link>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80"
          alt="Football field at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Booking the Perfect Field for Your Team Has Never Been Easier!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Choose your field, set the time, and enjoy the match – all in a few simple steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signUp" className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 text-lg">
              <span>Start Booking</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
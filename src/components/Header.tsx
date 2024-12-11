import React from 'react';
import { Menu, Volleyball,User} from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Volleyball className="w-8 h-8 text-emerald-600" />
          <span className="text-xl font-bold text-gray-800">FieldFinder</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/Features" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</Link>
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">About Us</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
          <Link to="/signUp" className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
         
        </div>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </nav>
    </header>
    
  );
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Testimonials from './Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';
import SignUp from './components/signUp.tsx';
import Login from './components/login.tsx';

import './App.css';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />

      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

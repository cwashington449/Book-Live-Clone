import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Music2, MapPin, Calendar, Users2, ArrowRight, Star, Building2, Mic2 } from 'lucide-react';
import { useRef, useState } from 'react';
import VenueSignup from './pages/VenueSignup';
import ArtistSignup from './pages/ArtistSignup';
import VenueProfile from './pages/VenueProfile';
import ArtistProfile from './pages/ArtistProfile';

const features = [
  {
    icon: Building2,
    title: 'Venue Management',
    description: 'Easy-to-use platform for venues to manage their entertainment calendar and find the perfect acts.'
  },
  {
    icon: Mic2,
    title: 'Artist Profiles',
    description: 'Showcase your talent with rich profiles including social media integration and performance highlights.'
  },
  {
    icon: Calendar,
    title: 'Smart Booking',
    description: 'Find available acts for specific dates and filter by genre, style, and availability.'
  },
  {
    icon: Star,
    title: 'Reviews & Ratings',
    description: 'Build trust with verified reviews from venues and artists after each performance.'
  }
];

function App() {
  const venueSignupRef = useRef<HTMLDivElement>(null);
  const artistSignupRef = useRef<HTMLDivElement>(null);
  const [activeSignup, setActiveSignup] = useState<'venue' | 'artist' | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, type: 'venue' | 'artist') => {
    setActiveSignup(type);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 px-4 py-32 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Connect Venues with Amazing Entertainment
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            The easiest way to book live entertainment for your venue. Find and book the perfect acts for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" id="cta-buttons">
            <button
              onClick={() => scrollToSection(venueSignupRef, 'venue')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center"
            >
              List Your Venue <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection(artistSignupRef, 'artist')}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
            >
              Join as an Artist <Music2 className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Signup Sections */}
      <div className="relative">
        <div
          ref={venueSignupRef}
          className={`transition-opacity duration-300 ${
            activeSignup === null || activeSignup === 'venue'
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
        >
          <VenueSignup />
        </div>
        <div
          ref={artistSignupRef}
          className={`transition-opacity duration-300 ${
            activeSignup === null || activeSignup === 'artist'
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none absolute inset-0'
          }`}
        >
          <ArtistSignup />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue-signup" element={<VenueSignup />} />
        <Route path="/artist-signup" element={<ArtistSignup />} />
        <Route path="/venue/:id" element={<VenueProfile />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
      </Routes>
    </div>
  );
}

// Home component for the landing page content
function Home() {
  return (
    <>
      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Everything you need to manage entertainment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your booking process and find the perfect match for your venue or showcase your talent to the right audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join thousands of venues and artists already using our platform
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Users2 className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Over 10,000 artists registered</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700">2,500+ venues across the country</p>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700">50,000+ successful bookings</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80"
                alt="Live Performance"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your venue's entertainment?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our platform today and start connecting with the perfect entertainment for your venue.
          </p>
          <Link to="/venue-signup" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition inline-block">
            Get Started Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
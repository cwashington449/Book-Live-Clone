import React from 'react';
import { Building2, MapPin, Clock, Music2, Calendar, Star, Phone, Globe, Mail, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data - replace with real data from your backend
const venueData = {
  name: "The Rustic Barrel",
  type: "Brewery",
  rating: 4.8,
  reviewCount: 124,
  description: "A spacious brewery featuring live music every weekend, with a state-of-the-art sound system and dedicated performance area. We host everything from acoustic sets to full bands.",
  address: "123 Craft Beer Lane",
  city: "Portland",
  state: "OR",
  phone: "(555) 123-4567",
  email: "bookings@rusticbarrel.com",
  website: "www.rusticbarrel.com",
  capacity: 200,
  musicTypes: ["Rock", "Jazz", "Blues", "Folk"],
  amenities: [
    "Professional Sound System",
    "Stage Lighting",
    "Green Room",
    "Free Parking",
    "Full Kitchen"
  ],
  upcomingEvents: [
    {
      date: "2024-03-25",
      artist: "The Mountain Folk",
      type: "Folk Band",
      time: "8:00 PM"
    },
    {
      date: "2024-03-26",
      artist: "Jazz Quartet",
      type: "Jazz",
      time: "7:30 PM"
    }
  ],
  photos: [
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1574281570877-bd815ebb50a6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577301656525-dbed2c32d404?auto=format&fit=crop&q=80"
  ]
};

function VenueProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Main Image */}
      <div className="relative h-96">
        <img
          src={venueData.photos[0]}
          alt={venueData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{venueData.name}</h1>
            <div className="flex items-center gap-4 text-lg">
              <span className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                {venueData.type}
              </span>
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {venueData.city}, {venueData.state}
              </span>
              <span className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                {venueData.rating} ({venueData.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Venue Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">About the Venue</h2>
              <p className="text-gray-600 mb-6">{venueData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-indigo-600" />
                  Capacity: {venueData.capacity} people
                </div>
                <div className="flex items-center text-gray-600">
                  <Music2 className="h-5 w-5 mr-2 text-indigo-600" />
                  {venueData.musicTypes.join(", ")}
                </div>
              </div>
            </section>

            {/* Amenities Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Venue Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {venueData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-indigo-600 rounded-full mr-2" />
                    {amenity}
                  </div>
                ))}
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {venueData.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${venueData.name} - ${index + 1}`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Contact & Events */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-indigo-600" />
                  {venueData.phone}
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-indigo-600" />
                  {venueData.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-3 text-indigo-600" />
                  {venueData.website}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-indigo-600" />
                  {venueData.address}
                  <br />
                  {venueData.city}, {venueData.state}
                </div>
              </div>
              <button className="w-full mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Contact Venue
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {venueData.upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start">
                      <div className="bg-indigo-100 rounded p-2 mr-4">
                        <Calendar className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.artist}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-sm text-gray-600">
                          {event.time} · {event.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/events"
                className="block text-center mt-4 text-indigo-600 hover:text-indigo-700"
              >
                View All Events
              </Link>
            </div>

            {/* Booking CTA */}
            <div className="bg-indigo-600 rounded-lg shadow-sm p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Ready to Perform Here?</h2>
              <p className="mb-4 text-indigo-100">
                Submit your booking request and showcase your talent at {venueData.name}
              </p>
              <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
                Request to Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueProfile;
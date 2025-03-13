import React from 'react';
import { Music2, MapPin, Calendar, Star, Phone, Mail, Globe, Instagram, Facebook, Youtube, Users2, Clock, DollarSign, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data - replace with real data from your backend
const artistData = {
  name: "The Mountain Folk",
  type: "Folk Band",
  rating: 4.9,
  reviewCount: 86,
  bio: "The Mountain Folk brings the spirit of Americana to life with their unique blend of folk, bluegrass, and indie rock. With over 500 performances across the Pacific Northwest, we've built a reputation for energetic live shows and authentic storytelling through music.",
  location: {
    city: "Portland",
    state: "OR"
  },
  memberCount: 4,
  genres: ["Folk", "Americana", "Bluegrass", "Indie Folk"],
  priceRange: "$800-$1,500 per show",
  typicalSetLength: "2 x 45 minute sets",
  equipment: "Full PA system, stage monitors, lighting rig, instruments",
  travelDistance: "Up to 100 miles",
  phone: "(555) 234-5678",
  email: "bookings@mountainfolk.com",
  website: "www.mountainfolk.com",
  social: {
    instagram: "@themountainfolk",
    facebook: "TheMountainFolk",
    youtube: "MountainFolkBand"
  },
  upcomingShows: [
    {
      date: "2024-03-25",
      venue: "The Rustic Barrel",
      location: "Portland, OR",
      time: "8:00 PM"
    },
    {
      date: "2024-03-30",
      venue: "Woodland Gardens",
      location: "Seattle, WA",
      time: "7:00 PM"
    }
  ],
  pastVenues: [
    "The Rustic Barrel",
    "Pine Street Market",
    "Forest Park Amphitheater",
    "Mountain View Brewery",
    "River's Edge Winery"
  ],
  media: {
    photos: [
      "https://images.unsplash.com/photo-1517147177326-b37599372b73?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80",
        title: "Live at Mountain View Brewery",
        views: "2.3K"
      }
    ]
  },
  availability: {
    monday: false,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: false
  }
};

function ArtistProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={artistData.media.photos[0]}
          alt={artistData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{artistData.name}</h1>
            <div className="flex items-center gap-4 text-lg flex-wrap">
              <span className="flex items-center">
                <Music2 className="h-5 w-5 mr-2" />
                {artistData.type}
              </span>
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {artistData.location.city}, {artistData.location.state}
              </span>
              <span className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                {artistData.rating} ({artistData.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Artist Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">About the Artist</h2>
              <p className="text-gray-600 mb-6">{artistData.bio}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Users2 className="h-5 w-5 mr-2 text-indigo-600" />
                  {artistData.memberCount} Members
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                  {artistData.typicalSetLength}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2 text-indigo-600" />
                  {artistData.priceRange}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                  {artistData.travelDistance}
                </div>
              </div>
            </section>

            {/* Media Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Photos & Videos</h2>
              <div className="space-y-6">
                {/* Photos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {artistData.media.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${artistData.name} - ${index + 1}`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  ))}
                </div>
                
                {/* Videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {artistData.media.videos.map((video, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <div className="text-white text-center">
                          <h3 className="font-semibold">{video.title}</h3>
                          <p className="text-sm">{video.views} views</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Past Venues */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Past Performances</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {artistData.pastVenues.map((venue, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Building2 className="h-5 w-5 mr-2 text-indigo-600" />
                    {venue}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking & Contact */}
          <div className="space-y-8">
            {/* Booking CTA */}
            <div className="bg-indigo-600 rounded-lg shadow-sm p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Book This Artist</h2>
              <p className="mb-4 text-indigo-100">
                Available for bookings at your venue
              </p>
              <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
                Request Booking
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-indigo-600" />
                  {artistData.phone}
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-indigo-600" />
                  {artistData.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-3 text-indigo-600" />
                  {artistData.website}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Social Media</h2>
              <div className="space-y-4">
                <a
                  href={`https://instagram.com/${artistData.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <Instagram className="h-5 w-5 mr-3" />
                  {artistData.social.instagram}
                </a>
                <a
                  href={`https://facebook.com/${artistData.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <Facebook className="h-5 w-5 mr-3" />
                  {artistData.social.facebook}
                </a>
                <a
                  href={`https://youtube.com/${artistData.social.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <Youtube className="h-5 w-5 mr-3" />
                  {artistData.social.youtube}
                </a>
              </div>
            </div>

            {/* Upcoming Shows */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Shows</h2>
              <div className="space-y-4">
                {artistData.upcomingShows.map((show, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start">
                      <div className="bg-indigo-100 rounded p-2 mr-4">
                        <Calendar className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{show.venue}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(show.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-sm text-gray-600">
                          {show.time} · {show.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
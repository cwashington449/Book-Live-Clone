import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music2, Users, Link as LinkIcon, Calendar, ArrowLeft, ArrowRight, Instagram, Facebook, Youtube, Globe } from 'lucide-react';

type ArtistFormData = {
  // Account Details
  email: string;
  password: string;
  confirmPassword: string;

  // Artist Details
  artistName: string;
  performanceType: string;
  genres: string[];
  memberCount: string;
  location: {
    city: string;
    state: string;
  };
  bio: string;

  // Social Media & Links
  website: string;
  instagram: string;
  facebook: string;
  youtube: string;

  // Performance Details
  typicalSetLength: string;
  priceRange: string;
  travelDistance: string;
  equipment: string;
  pastVenues: string;
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
};

const initialFormData: ArtistFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  artistName: '',
  performanceType: '',
  genres: [],
  memberCount: '',
  location: {
    city: '',
    state: '',
  },
  bio: '',
  website: '',
  instagram: '',
  facebook: '',
  youtube: '',
  typicalSetLength: '',
  priceRange: '',
  travelDistance: '',
  equipment: '',
  pastVenues: '',
  availability: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
};

const performanceTypes = [
  'Solo Artist',
  'Band',
  'DJ',
  'Duo',
  'Trio',
  'Cover Band',
  'Tribute Act',
  'Orchestra',
  'Other',
];

const musicGenres = [
  'Rock',
  'Jazz',
  'Blues',
  'Country',
  'Hip Hop',
  'Electronic',
  'Pop',
  'Folk',
  'Classical',
  'R&B',
  'Metal',
  'World Music',
  'Funk',
  'Soul',
  'Reggae',
  'Latin',
];

function ArtistSignup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ArtistFormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleGenreChange = (genre: string) => {
    setFormData((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }));
  };

  const handleAvailabilityChange = (day: keyof typeof formData.availability) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: !prev.availability[day],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join as an Artist</h1>
          <p className="text-gray-600">Create your profile and start connecting with venues</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((number) => (
            <div
              key={number}
              className={`flex items-center ${number !== 4 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= number
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {number}
              </div>
              {number !== 4 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    step > number ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Account Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
                <Users className="h-6 w-6 text-indigo-600" />
                Account Details
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Artist Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
                <Music2 className="h-6 w-6 text-indigo-600" />
                Artist Details
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Artist/Band Name
                </label>
                <input
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Performance Type
                </label>
                <select
                  name="performanceType"
                  value={formData.performanceType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a type</option>
                  {performanceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Music Genres
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {musicGenres.map((genre) => (
                    <label
                      key={genre}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={formData.genres.includes(genre)}
                        onChange={() => handleGenreChange(genre)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span>{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="location.city"
                    value={formData.location.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="location.state"
                    value={formData.location.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell venues about your music and performance style..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Social Media & Links */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
                <LinkIcon className="h-6 w-6 text-indigo-600" />
                Social Media & Links
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Website URL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center">
                  <Instagram className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    placeholder="Instagram handle"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center">
                  <Facebook className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleInputChange}
                    placeholder="Facebook page URL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center">
                  <Youtube className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleInputChange}
                    placeholder="YouTube channel URL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Performance Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
                <Calendar className="h-6 w-6 text-indigo-600" />
                Performance Details
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Typical Set Length
                </label>
                <input
                  type="text"
                  name="typicalSetLength"
                  value={formData.typicalSetLength}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 hours"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <input
                  type="text"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleInputChange}
                  placeholder="e.g., $500-$1000 per performance"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Distance
                </label>
                <input
                  type="text"
                  name="travelDistance"
                  value={formData.travelDistance}
                  onChange={handleInputChange}
                  placeholder="e.g., Up to 50 miles"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Equipment
                </label>
                <textarea
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleInputChange}
                  placeholder="List the equipment you bring to performances..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Typical Availability
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(formData.availability).map(([day, isAvailable]) => (
                    <label
                      key={day}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={isAvailable}
                        onChange={() => handleAvailabilityChange(day as keyof typeof formData.availability)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="capitalize">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Complete Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ArtistSignup;
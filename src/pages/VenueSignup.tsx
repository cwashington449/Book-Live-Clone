import React, { useState } from 'react';
import { Building2, MapPin, Clock, Users, Music, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type VenueFormData = {
  // Account Details
  email: string;
  password: string;
  confirmPassword: string;
  
  // Venue Details
  venueName: string;
  venueType: string;
  capacity: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  
  // Entertainment Details
  musicTypes: string[];
  setupDetails: string;
  stageDimensions: string;
  soundSystem: boolean;
  
  // Operating Hours
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
};

const initialFormData: VenueFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  venueName: '',
  venueType: '',
  capacity: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  musicTypes: [],
  setupDetails: '',
  stageDimensions: '',
  soundSystem: false,
  openingHours: {
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
  },
};

const venueTypes = [
  'Bar',
  'Brewery',
  'Club',
  'Restaurant',
  'Winery',
  'Distillery',
  'Concert Hall',
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
];

function VenueSignup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<VenueFormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (genre: string) => {
    setFormData((prev) => ({
      ...prev,
      musicTypes: prev.musicTypes.includes(genre)
        ? prev.musicTypes.filter((g) => g !== genre)
        : [...prev.musicTypes, genre],
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Venue</h1>
          <p className="text-gray-600">Complete your venue profile to start booking entertainment</p>
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

          {/* Step 2: Venue Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
                <Building2 className="h-6 w-6 text-indigo-600" />
                Venue Details
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Venue Name
                </label>
                <input
                  type="text"
                  name="venueName"
                  value={formData.venueName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Venue Type
                </label>
                <select
                  name="venueType"
                  value={formData.venueType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a type</option>
                  {venueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capacity
                </label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
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
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Entertainment Details */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
                <Music className="h-6 w-6 text-indigo-600" />
                Entertainment Details
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Music Types
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {musicGenres.map((genre) => (
                    <label
                      key={genre}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={formData.musicTypes.includes(genre)}
                        onChange={() => handleCheckboxChange(genre)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span>{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stage Dimensions
                </label>
                <input
                  type="text"
                  name="stageDimensions"
                  value={formData.stageDimensions}
                  onChange={handleInputChange}
                  placeholder="e.g., 20ft x 15ft"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Setup Details
                </label>
                <textarea
                  name="setupDetails"
                  value={formData.setupDetails}
                  onChange={handleInputChange}
                  placeholder="Describe your stage setup, available equipment, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Step 4: Operating Hours */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
                <Clock className="h-6 w-6 text-indigo-600" />
                Operating Hours
              </div>

              {Object.keys(formData.openingHours).map((day) => (
                <div key={day}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {day}
                  </label>
                  <input
                    type="text"
                    name={`openingHours.${day}`}
                    value={formData.openingHours[day as keyof typeof formData.openingHours]}
                    onChange={handleInputChange}
                    placeholder="e.g., 5:00 PM - 2:00 AM"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              ))}
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

export default VenueSignup;